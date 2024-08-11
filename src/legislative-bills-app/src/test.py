import sys
from pathlib import Path

from vector_db.vector_db_interface import vector_db

def test_recommendations():
    while True:
        print("\nEnter a user description (or 'quit' to exit):")
        user_description = input("> ")
        
        if user_description.lower() == 'quit':
            break
        
        try:
            recommendations = vector_db.get_bill_recommendations(user_description)
            
            print(f"\nTop 5 bill recommendations for: '{user_description}'\n")
            for i, rec in enumerate(recommendations, 1):
                print(f"Recommendation {i}:")
                print(f"Bill ID: {rec['bill_id']}")
                print(f"Title: {rec['title']}")
                print(f"Content: {rec['content']}")
                print(f"Similarity Score: {rec['similarity_score']:.4f}")
                print("-" * 50)
        except Exception as e:
            print(f"An error occurred: {e}")

if __name__ == "__main__":
    test_recommendations()
