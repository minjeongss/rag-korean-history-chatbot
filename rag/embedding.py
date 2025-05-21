# Chunking data -> Vector data

!pip install chromadb
!pip install sentence-transformers

import json
import chromadb
from chromadb.utils import embedding_functions

# 1. Import chunking data
with open("final_chunks.json", "r", encoding="utf-8") as f:
    chunks = json.load(f)

# 2. Embedding model: all-MiniLM-L6-v2
default_ef = embedding_functions.DefaultEmbeddingFunction()
val = default_ef(chunks)
print(val)
