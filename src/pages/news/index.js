import React, { useState, useEffect } from 'react';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import fs from 'fs';


async function getProcessedContent(content) {
    const processedContent = await remark()
        .use(html)
        .process(content);
    return processedContent.toString();
}

export default function News({ allNewsData }) {
    const [newsContent, setNewsContent] = useState([]);

    useEffect(() => {
        const processContent = async () => {
            const processedNews = await Promise.all(
                allNewsData.map(async news => ({
                    ...news,
                    content: await getProcessedContent(news.processedContent)
                }))
            );
            setNewsContent(processedNews);
        };

        processContent();
    }, []);

    return (
        <div className="mx-2 md:mx-6 py-6">
            <div className='container mx-auto'>
                <h1 className="text-6xl font-bold">News</h1>
            </div>
            <hr className="border-slate-600 dark:border-slate-400 my-6" />
            <div className='container mx-auto'>
                <div className="flex justify-center flex-col gap-6">
                    {newsContent.map(({ id, title, date, content }) => (
                        <div key={id} className="flex flex-col gap-6">
                            <div dangerouslySetInnerHTML={{ __html: content }} className='prose dark:prose-invert max-w-[100%]' />
                            <hr className="border-slate-600 dark:border-slate-400 my-6" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export async function getStaticProps() {

    const newsDirectory = path.join(process.cwd(), 'src/data/news');
    console.log("newsDirectory", newsDirectory);
    function getSortedNewsData() {
        const fileNames = fs.readdirSync(newsDirectory);
        const allNewsData = fileNames.map(fileName => {
            const id = fileName.replace(/\.md$/, '');

            const fullPath = path.join(newsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            const matterResult = matter(fileContents);
            const processedContent = matterResult.content;

            return {
                id,
                ...matterResult.data,
                processedContent
            };
        });

        return allNewsData.sort(({ date: a }, { date: b }) => {
            return new Date(b) - new Date(a);
        });
    }


    const allNewsData = getSortedNewsData();
    return {
        props: {
            allNewsData
        }
    };
}
