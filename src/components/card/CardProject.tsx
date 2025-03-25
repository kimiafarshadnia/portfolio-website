'use client'

import Link from "next/link";
import { Data } from "Types";
import Image from "next/image";
import { withHttps } from "Utils";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Icon, NavigationLink } from "Components";
import { faGlobe, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
    project: Data;
}

export const CardProject = ({ project }: Props) => {
    const t = useTranslations();
    const params = useParams();
    const locale = params?.locale as string;
    return (
        <div className="w-full group border-2 cursor-pointer dark:border-purple p-3 gap-3 flex flex-col rounded-lg h-[430px] justify-between">
            <div className="flex flex-shrink-0 hover-group:opacity-0.4 items-start justify-start w-full h-[180px] transition-all duration-300 ease-linear group-hover:opacity-55">
                <Image src={project.image} alt={`${project.name}+project`} width={100} height={180} className=" w-full h-full rounded-lg object-cover" />
            </div>
            <div className="">
                <span className="dark:text-white text-secondary capitalize text-lg transition-all duration-300 ease-linear">
                    {project.name}
                </span>
            </div>
            <div className="hidden absolute top-24 left-28 group-hover:block">
                <NavigationLink href={`/${locale}/projects/${project.id}`}>
                    <div className="w-fit bg-lavender text-white font-medium capitalize px-5 py-1 rounded-sm transition-transform duration-300 ease-linear group-hover:scale-105">
                        {t('button.more')}
                    </div>
                </NavigationLink>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
                <div className="border border-purple rounded-lg text-center px-2 py-1 w-fit">
                    <span>Next js</span>
                </div>
                <div className="border border-purple rounded-lg text-center px-2 py-1 w-fit">
                    <span>Next js</span>
                </div>
                <div className="border border-purple rounded-lg text-center px-2 py-1 w-fit">
                    <span>Next js</span>
                </div>
                <div className="border border-purple rounded-lg text-center px-2 py-1 w-fit">
                    <span>typescript</span>
                </div>
            </div>
            <div className="text-gray-500 text-sm line-clamp-2">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi dolorum expedita non nesciunt vero quia unde perferendis, quam delectus eveniet obcaecati autem? Ex maxime cupiditate nihil asperiores, aliquid ipsa ducimus?</p>
            </div>
            <div className="">
                <div className="flex items-center gap-4">
                    <Link href={withHttps(project.html_url)} target="_blank">
                        <Icon iconName={faGithub} size="xl" className="hover:scale-110 duration-300" />
                    </Link>
                    {project.homepage && (
                        <Link href={withHttps(project.homepage)} target="_blank">
                            <Icon iconName={faGlobe} size="xl" className="hover:scale-110 duration-300" />
                        </Link>
                    )}
                </div>
            </div>
        </div>

    )
}