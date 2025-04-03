import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/articles/${id}.md`)
        const text = await response.text();
        if (response.status == 200 && !text.startsWith("<!doctype html>")) {
          const html = await marked(text);
          setContent(html);
          setDate(new Date().toLocaleDateString());
        }

        else {
          setContent(`error: ${response.status}`)
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <div className="mt-5 bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{id}</h2>
      <div className="prose mb-4" dangerouslySetInnerHTML={{ __html: content }} />
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  );
};

export default ArticlePage;
