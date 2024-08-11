from .embeddings import get_embedding_function, embed_query

def recommend_bills(user_profile, vector_store, k=5):
    embedding_function = get_embedding_function()
    user_text = user_profile.to_text()
    user_embedding = embed_query(embedding_function, user_text)

    results = vector_store.similarity_search_by_vector(user_embedding, k=k)

    recommendations = []
    for doc in results:
        recommendations.append({
            "bill_id": doc.metadata['bill_id'],
            "title": doc.metadata['title'],
            "content": doc.page_content,
            "similarity_score": doc.metadata['similarity_score']
        })

    return recommendations