from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import Task
from database import tasks_collection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/tasks", response_model=list[Task])
async def get_tasks():
    tasks_from_db = await tasks_collection.find().to_list(length=None)

    tasks = [
        Task(id=str(task["_id"]), title=task["title"], completed=task["completed"])
        for task in tasks_from_db
    ]
    return tasks


@app.post("/tasks", response_model=Task)
async def create_task(task: Task):
    task_dict = dict(task)

    result = await tasks_collection.insert_one(task_dict)

    task.id = str(result.inserted_id)

    return task
