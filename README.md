# 김반장

## rag

### chunking

MarkdownHeaderTextSplitter > RecursiveCharacterTextSplitter

- MarkdownHeaderTextSplitter : Markdown을 기준으로 크게 분리
- RecursiveCharacterTextSplitter: Markdown으로 분리된 덩어리를 더 작게 분리

### embedding

- model: all-MiniLM-L6-v2
