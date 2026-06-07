from fastapi import FastAPI

app = FastAPI(
    title="AKDresser API"
)

@app.get("/")
def root():
    return {
        "message": "AKDresser Backend Running"
    }