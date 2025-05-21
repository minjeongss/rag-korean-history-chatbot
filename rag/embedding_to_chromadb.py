# Chunking data -> Vector data
# Vector data -> ChromaDB

!pip install chromadb
!pip install sentence-transformers

import json
import chromadb
from chromadb.utils import embedding_functions

# 1. Import chunking data
with open("final_chunks.json", "r", encoding="utf-8") as f:
    chunks = json.load(f)

# 2. Embedding model
default_ef = embedding_functions.DefaultEmbeddingFunction()

# 3. Chromadb connect
client = chromadb.Client()
collection = client.create_collection(name="korean_chunks2", embedding_function=default_ef)

collection.add(
    documents=chunks,
    ids=[f"doc_{i}" for i in range(len(chunks))]
)
results = collection.get(include=["embeddings", "documents"])

# 4. Select query
query="권문세족이 권력을 독점했을 때 고려는 어디로 수도를 옮겼나요?"
results = collection.query(
    query_texts=[query],
    n_results=3  # top similar 3 results
)

# 5. Check result
# embeddings(Vector data), documents(Chunking data)
for i in range(3):
    print(f"\n[Top {i+1}]")
    print("문서 ID:", results["ids"][0][i])
    print("유사도 거리:", results["distances"][0][i])
    print("내용:", results["documents"][0][i])
