import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

class VectorStore:
    def __init__(self, documents, embedding_function):
        self.documents = documents
        self.embedding_function = embedding_function
        self.embeddings = self.embed_documents()

    def embed_documents(self):
        batch_size = 256  # Fireworks API limit
        all_embeddings = []
        
        for i in range(0, len(self.documents), batch_size):
            batch = self.documents[i:i+batch_size]
            batch_content = [doc.page_content for doc in batch]
            batch_embeddings = self.embedding_function.embed_documents(batch_content)
            all_embeddings.extend(batch_embeddings)
        
        return all_embeddings

    def similarity_search(self, query, k=5):
        query_embedding = self.embedding_function.embed_query(query)
        return self.similarity_search_by_vector(query_embedding, k)

    def similarity_search_by_vector(self, vector, k=5):
        similarities = cosine_similarity([vector], self.embeddings)[0]
        top_k_indices = np.argsort(similarities)[-k:][::-1]
        results = []
        for i in top_k_indices:
            doc = self.documents[i].copy()
            doc.metadata['similarity_score'] = similarities[i]
            results.append(doc)
        return results