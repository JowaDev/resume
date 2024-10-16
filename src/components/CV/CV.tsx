import {FC} from "react";
import me from '@/img/me.jpeg'
import bg from '@/img/img.png'
import Image from 'next/image'
import {CakeIcon, EarthIcon, GithubIcon, MailIcon, MapPin, MapPinned, PhoneIcon} from "lucide-react";
import Link from "next/link";

const personalData = {
    origin: ['Suisse', <MapPin key={0} size={16}/>],
    birthday: ['13/04/1997', <CakeIcon key={0} size={16}/>],
    location: ['Vétroz (VS)', <MapPinned key={0} size={16}/>],
    name: 'DASEK Joiakim',
    email: ['dasek.joiakim@gmail.com', <MailIcon key={0} size={16}/>],
    phone: ['+41 79 358 61 44', <PhoneIcon key={0} size={16}/>],
    github: ['JowaDev', 'https://github.com/JowaDev', <GithubIcon key={0} size={16}/>],
    portfolio: ['https://portfolio.jowa.dev', <EarthIcon key={0} size={16}/>],
}

interface CVProps {

}

export const CV: FC<CVProps> = () => {
    return (
        <main
            className='h-full w-full flex justify-center items-center'
        >
            <div
                className='min-w-[896px] max-w-[896px] h-full shadow-black shadow-lg'
            >
                <div
                    className="h-64 w-full relative overflow-hidden py-8 px-48 flex items-center justify-center bg-gray-500"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center filter blur-md grayscale"
                        style={{backgroundImage: `url(${bg.src})`}}
                    />
                    <div
                        className='relative bg-transparent w-full rounded-full h-full p-2 flex justify-center items-center'
                    >
                        <Image
                            src={me}
                            className='z-[2] absolute left-[6px] object-cover rounded-full w-[180px] h-[180px] filter grayscale'
                            alt='Me'
                            height={1000}
                            width={1000}
                        />
                        <div
                            className='absolute left-[0px] rounded-full w-[193px] h-[193px] bg-white p-2 flex items-center justify-center'
                        />
                        <div
                            className='z-[1] absolute right-[20px] top-[24px] bg-black p-2 rounded-r-full w-3/4 h-24 text-white text-3xl flex items-center justify-center'
                        >
                            <span
                                className='absolute right-[45px]'
                            >
                                {personalData.name}
                            </span>
                        </div>
                        <div
                            className='z-[0] absolute right-[70px] bottom-[24px] bg-white p-4 rounded-r-full w-3/4 h-12 text-black text-[12px] flex items-center font-semibold'
                        >
                            <span
                                className='absolute right-[25px]'
                            >
                                Étudiant en Informatique à l’HEG
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    className='grid grid-cols-2 text-white'
                >
                    <div
                        className='bg-black px-14 py-6'
                    >
                        <span
                            className='text-xl font-bold uppercase'
                        >
                            à propos de moi
                        </span>
                        <p
                            className='text-sm mt-2'
                        >
                            Étudiant passionné en IT à la HES-SO, avec une expérience en développement
                            d&apos;applications web et intégration de solutions cloud.
                        </p>
                        <div
                            className='flex gap-4 mt-4 items-center'
                        >
                            {
                                personalData.origin[1]
                            }
                            <span
                                className='text-sm'
                            >
                                {
                                    personalData.origin[0]
                                }
                            </span>
                        </div>
                        <div
                            className='flex gap-4 mt-4 items-center'
                        >
                            {
                                personalData.birthday[1]
                            }
                            <span
                                className='text-sm'
                            >
                                {
                                    personalData.birthday[0]
                                }
                        </span>
                        </div>
                        <div
                            className='flex gap-4 mt-4 items-center'
                        >
                            {
                                personalData.location[1]
                            }
                            <span
                                className='text-sm'
                            >
                                {
                                    personalData.location[0]
                                }
                            </span>
                        </div>
                        <div
                            className='w-full border my-4'
                        />
                        <span
                            className='text-xl font-bold uppercase'
                        >
                            Contact
                        </span>
                        <Link
                            className='flex gap-4 mt-4 items-center'
                            href='mailto:dasek.joiakim@gmail.com'
                            target='_blank'
                        >
                            {
                                personalData.email[1]
                            }
                            <span
                                className='text-sm'
                            >
                                {
                                    personalData.email[0]
                                }
                            </span>
                        </Link>
                        <Link
                            className='flex gap-4 mt-4 items-center'
                            href='tel:+41793586144'
                        >
                            {
                                personalData.phone[1]
                            }
                            <span
                                className='text-sm'
                            >
                                {
                                    personalData.phone[0]
                                }
                            </span>
                        </Link>
                        <div
                            className='flex gap-4 mt-4 items-center'
                        >
                            {
                                personalData.github[2]
                            }
                            <Link
                                className='text-sm'
                                href={personalData.github[1] as string}
                                target='_blank'
                            >
                                {
                                    personalData.github[0]
                                }
                            </Link>
                        </div>
                        <Link
                            className='flex gap-4 mt-4 items-center'
                            href='https://portfolio.jowa.dev'
                            target='_blank'
                        >
                            {
                                personalData.portfolio[1]
                            }
                            <span
                                className='text-sm'
                            >
                                {
                                    personalData.portfolio[0]
                                }
                            </span>
                        </Link>
                        <div
                            className='w-full border my-4'
                        />
                        <span
                            className='text-xl font-bold uppercase'
                        >
                            Compétences
                        </span>
                        <ul
                            className='mt-4 list-disc list-inside'
                        >
                            {
                                [
                                    "Autonomie",
                                    "Travail d’équipe",
                                    "Gestion de projet",
                                    "Proactif"
                                ].map((item, n) => (
                                    <li
                                        key={n}
                                        className='list-item text-sm'
                                    >
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                        <div
                            className='w-full border my-4'
                        />
                        <span
                            className='text-xl font-bold uppercase'
                        >
                            Technologies
                        </span>
                        <ul
                            className='mt-4 list-disc list-inside text-nowrap'
                        >
                            {
                                [
                                    'OpenStack',
                                    'Terraform',
                                    'Kubernetes & K3\'s',
                                    'Next.js',
                                    'AWS (EC2, S3, EKS)',
                                    'Infomaniak (Jelastic & Public Cloud)',
                                    'Azure Fabric (BI & RTA)',
                                ].map((item, n) => (
                                    <li
                                        key={n}
                                        className='list-item text-sm'
                                    >
                                        {item}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div
                        className='px-14 py-6 text-black'
                    >
                        <Link
                            className='w-full bg-black text-center flex justify-center rounded-full text-white text-lg p-2 tracking-wider font-bold uppercase'
                            href='https://portfolio.jowa.dev/#etude'
                            target='_blank'
                        >
                            Diplômes / Formations
                        </Link>
                        <p
                            className='text-sm font-bold mt-4'
                        >
                            HEG - Filière informatique de gestion
                        </p>
                        <p
                            className='text-sm italic'
                        >
                            Depuis setpembre 2022 à l’HEG de Sierre
                        </p>
                        <p
                            className='text-xs'
                        >
                            Actuellement au cinquième semestre
                        </p>
                        <p
                            className='text-sm font-bold mt-4'
                        >
                            Formation leadership
                        </p>
                        <p
                            className='text-sm italic'
                        >
                            De 2019 à 2021 à l’armée Suisse - EKF Cyber
                        </p>
                        <p
                            className='text-xs'
                        >
                            Officier lieutenant puis commandant remplaçant
                        </p>
                        <p
                            className='text-sm font-bold mt-4'
                        >
                            HEG - Certificat Web Master
                        </p>
                        <p
                            className='text-sm italic'
                        >
                            De 2015 à 2016 à l’HEG de Sierre
                        </p>
                        <p
                            className='text-xs'
                        >
                            Formation en continu
                        </p>
                        <p
                            className='text-sm font-bold mt-4'
                        >
                            Collège - Maturité gymnasiale fédérale
                        </p>
                        <p
                            className='text-sm italic'
                        >
                            De 2013 à 2018 au Collège Ardévaz
                        </p>
                        <p
                            className='text-xs'
                        >
                            Spécialisation économie, droit et géographie
                        </p>
                        <Link
                            className='w-full bg-black text-center flex justify-center rounded-full text-white text-lg p-2 tracking-wider font-bold mt-6 uppercase'
                            href='https://portfolio.jowa.dev/#experience-professionnelle--mandats'
                            target='_blank'
                        >
                            Expériences pro
                        </Link>
                        <div
                            className='text-sm mt-4 flex justify-between items-center'
                        >
                            <span
                                className='font-bold'
                            >
                                Fullstack développeur
                            </span>
                            <span
                                className='text-xs'
                            >
                                Depuis Juillet
                            </span>
                        </div>
                        <p
                            className='text-sm italic'
                        >
                            OKenawa
                        </p>
                        <div
                            className='px-4'
                        >
                            <ul
                                className='list-disc list-outside'
                            >
                                <li
                                    className='list-item text-sm'
                                >
                                    Développement d’une WebApp avec headless CMS, ERP pour de l’E-Commerce et streaming
                                    vidéo.
                                </li>
                            </ul>
                        </div>
                        <div
                            className='w-full border border-black my-4'
                        />
                        <div>
                            <p
                                className='text-sm font-bold italic text-center'
                            >
                                Expériences et mandats supplémentaires
                            </p>
                            <p
                                className='text-xs font-mono text-center mt-1'
                            >
                                2015 - 2024
                            </p>
                            <Link
                                href='https://portfolio.jowa.dev/'
                                target='_blank'
                                className='text-center italic text-xs'
                            >
                                <p
                                    className='mt-1'
                                >
                                    Veuillez les consulter sur mon portfolio
                                </p>
                            </Link>
                        </div>
                        <div
                            className='w-full border border-black my-4'
                        />
                        <div
                            className='text-sm mt-4 flex justify-between items-center'
                        >
                            <span
                                className='font-bold'
                            >
                                Fullstack développeur
                            </span>
                            <span
                                className='text-xs'
                            >
                                2015 - 2018
                            </span>
                        </div>
                        <p
                            className='text-sm italic'
                        >
                            Axa Winterthur - B4Risk
                        </p>
                        <div
                            className='px-4'
                        >
                            <ul
                                className='list-disc list-outside'
                            >
                                <li
                                    className='list-item text-sm'
                                >
                                    Développement d’une WebApp from scratch, d&apos;analyse de risques pour PME,
                                    générant des rapports statistiques et une gestion détaillée des polices
                                    d&apos;assurance.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}