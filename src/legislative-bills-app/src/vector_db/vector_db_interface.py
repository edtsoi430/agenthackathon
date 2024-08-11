import os
from pathlib import Path
from .data_loader import load_bill_data, prepare_bill_documents
from .embeddings import get_embedding_function
from .vector_store import VectorStore
from .bill_recommender import recommend_bills

class VectorDBInterface:
    def __init__(self):
        self.vector_store = None
        self.initialize_vector_store()

    def initialize_vector_store(self):
        current_dir = Path(__file__).parent
        data_path = current_dir / 'data' / 'bill_data.csv'
        
        if not data_path.exists():
            raise FileNotFoundError(f"Bill data file not found at {data_path}")

        raw_data = load_bill_data(str(data_path))
        documents = prepare_bill_documents(raw_data)
        embedding_function = get_embedding_function()
        self.vector_store = VectorStore(documents, embedding_function)

    def get_bill_recommendations(self, user_description, k=5):
        if not self.vector_store:
            raise ValueError("Vector store not initialized")

        class UserProfile:
            def __init__(self, description):
                self.description = description

            def to_text(self):
                return self.description

        user_profile = UserProfile(user_description)
        return recommend_bills(user_profile, self.vector_store, k)

vector_db = VectorDBInterface()