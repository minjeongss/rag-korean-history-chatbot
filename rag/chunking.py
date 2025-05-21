# raw data -> chunk data

import json
from langchain.text_splitter import MarkdownHeaderTextSplitter, RecursiveCharacterTextSplitter

# 1. Import Document
markdown_text=""

# 2. MarkdownHeaderTextSplitter: split section by header(#, ##, ###)
headers_to_split_on = [
    ("#", "Header 1"),
    ("##", "Header 2"),
    ("###", "Header 3"),
]
md_splitter = MarkdownHeaderTextSplitter(
    headers_to_split_on=headers_to_split_on,
    strip_headers=False
)
md_sections = md_splitter.split_text(markdown_text)

# check part
print(f"[1단계] Markdown chunk 수: {len(md_sections)}")
for i, doc in enumerate(md_sections):
    print(f"[{i+1}] Metadata: {doc.metadata}")
    print("Page Content:")
    print(doc.page_content)
    print("-" * 50)


# 3. RecursiveCharacterTextSplitter
recursive_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=100,
    separators=["\n\n", "\n", ".", " ", ""]
)

chunks = []
for doc in md_sections:
    content = doc.page_content
    chunks = recursive_splitter.split_text(content)
    final_chunks.extend(chunks)

# check part
print(f"[2단계] 최종 chunk 수: {len(chunks)}")
for i, fc in enumerate(chunks):
    print(f"[{i+1}] {fc}")

# 4. Store Document as json
with open("chunks.json", "w", encoding="utf-8") as f:
    json.dump(chunks, f, ensure_ascii=False, indent=2)
