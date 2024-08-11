import pandas as pd
from langchain.schema import Document

def load_bill_data(file_path):
    df = pd.read_csv(file_path)
    return df.to_dict('records')

def prepare_bill_documents(data):
    documents = []
    for row in data:
        doc = Document(
            page_content=f"{row['title']}\n{row['description']}",
            metadata={"bill_id": row['bill_id'], "title": row['title']}
        )
        documents.append(doc)
    return documents