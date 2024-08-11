from langchain_community.document_loaders import FireCrawlLoader
import os
import json

# Construct the path relative to the project root
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
json_file_path = os.path.join(project_root, "tools", "bills.json")

def get_urls_from_ids(ids):
    # Load the JSON data from the file
    with open(json_file_path, 'r') as f:
        bills_data = json.load(f)
    
    # Retrieve URLs corresponding to the provided IDs
    urls = [bills_data.get(bill_id) for bill_id in ids if bill_id in bills_data]
    
    return urls

def extract_website_data(urls):
    # Ensure the API key is set in the environment
    if "FIRECRAWL_API_KEY" not in os.environ:
        os.environ["FIRECRAWL_API_KEY"] = "fc-c3115e88eff3468b9d0491e93435762f"
    
    # Initialize an empty list to store the results
    results = []
    
    for url in urls:
        # Load the document for each URL
        loader = FireCrawlLoader(url=url, mode="scrape")
        docs = loader.load()
        
        # Extract metadata and content from the first document
        if docs:
            doc = docs[0]
            metadata = doc.metadata
            
            # Prepare the dictionary for the current URL
            result = {
                "title": metadata.get("title"),
                "description": metadata.get("description"),
                "keywords": metadata.get("keywords"),
                "source_url": metadata.get("sourceURL"),
                "page_content": doc.page_content
            }
            
            # Add the result to the results list
            results.append(result)
    
    return results

example_ids = ["1636377", "1636504"]
urls = get_urls_from_ids(example_ids)
data = extract_website_data(urls)

# Print the extracted data
for item in data:
    print(item["title"])