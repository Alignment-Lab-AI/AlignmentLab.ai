import React from 'react';
import ProjectsData from '../data/projects.json'
import Link from 'next/link';
import RenderTable from '@/components/RenderTable';
import Button from '@/components/Button';

export default function About() {
    return (
        <>
            <div className="mx-2 md:mx-6 py-6">
                <div className='container mx-auto'>
                    <h1 className="text-6xl font-bold">
                        Our Projects
                    </h1>
                </div>

                <hr className="border-slate-600 dark:border-slate-400 my-6" />
                <div className='container mx-auto'>

                    <p className='text-lg md:text-xl lg:text-2xl leading-loose'>
                        We&apos;ve been consistently pushing State of the Art in AI. Our large language models have revolutionized the field, with substantial improvements in reasoning and performance among open models. <br /> 
                        With over 100+ leading global companies deploying our models at scale, like Intel and Mosaic, and over 200k downloads from our repositories per month we are among the leading AI research labs in the world.
                    </p>
                </div>
            </div>
            <div className="mx-2 md:mx-6 py-6">
                <div className='container mx-auto'>
                    <ul className='grid grid-cols-1 gap-6'>
                        {ProjectsData.map((project, index) => {
                            return (
                                <li key={index} className='item-dark-enabled shadow-lg rounded-lg p-6 md:p-12'>
                                    <div className="flex flex-col justify-center justify-items-center items-center gap-4 my-6">
                                        {project?.image && <img src={project.image} alt={project.title} style={{height:'200px', width:'200px', objectFit:'contain',}} />}
                                        {project?.title && <h2 className='text-2xl font-bold'>
                                            {project.title}
                                        </h2>}
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='text-sm md:text-base lg:text-lg leading-loose'>
                                            {project.description}
                                        </p>
                                        <div className="flex justify-center"> {/* Updated line here */}
                                            {project.details?.map((detail, index) => {
                                                return (<img key={index} src={detail} alt={project.title} className='' />)
                                            })}
                                        </div>
                                        {'HAHAHAHAH'}
                                        <Button href={project.link} className='w-full' text='🌟Github|Huggingface🤗' />
                                    </div>
                                </li>

                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

