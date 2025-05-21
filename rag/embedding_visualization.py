# Chunking data -> Vector data
# Vector data -> ChromaDB
# Export Vector data, Meta data
# Visualize result with Tensorflow projector

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
collection = client.create_collection(name="korean_chunks8", embedding_function=default_ef)

collection.add(
    documents=chunks,
    ids=[f"doc_{i}" for i in range(len(chunks))]
)
results = collection.get(include=["embeddings", "documents", "metadatas"])
embeddings = results["embeddings"]         
metadatas = results["metadatas"]        
documents = results["documents"]

# 4. Store Embedding Vector & Export vectors.tsv
with open("vectors.tsv", "w", encoding="utf-8") as f_vec:
    for vec in embeddings:
        line = "\t".join([str(x) for x in vec])
        f_vec.write(line + "\n")

# 5. Store Chunking data & Export metadata.tsv
with open("metadata.tsv", "w", encoding="utf-8") as f_meta:
    for text in documents:
        clean = text.replace("\n", " ").strip()
        f_meta.write(clean + "\n")

# **유의할 점: embeddings와 documents의 개수가 동일해야 함
print(len(results["embeddings"])) 
print(len(results["documents"])) 