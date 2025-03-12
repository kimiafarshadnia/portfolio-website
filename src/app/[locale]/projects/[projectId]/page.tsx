"use client"
import { Data } from 'Types';
import { useEffect, useState } from 'react';
import projectsData from "@/projects/projects.json";

export default function ProjectDetailPage({ params }: { params: { projectId: string } }) {
    const { projectId } = params;
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        // پیدا کردن پروژه مطابق با projectId
        const foundData = projectsData.find((r) => r.id === projectId);
        setData(foundData || null);
    }, [projectId]);

    if (!data) {
        return <div>Project not found</div>;
    }

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold">{data.name}</h1>
            hello
        </div>
    );
}
