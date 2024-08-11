import os
from langchain_fireworks import FireworksEmbeddings

def get_embedding_function(model_name="nomic-ai/nomic-embed-text-v1.5"):
    if "FIREWORKS_API_KEY" not in os.environ:
        raise ValueError("FIREWORKS_API_KEY not found in environment variables")
    return FireworksEmbeddings(model=model_name)

def embed_query(embedding_function, query):
    return embedding_function.embed_query(query)

def embed_documents(embedding_function, documents):
    return embedding_function.embed_documents(documents)