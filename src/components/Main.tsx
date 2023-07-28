
'use client'
import 'regenerator-runtime';
import Image from "next/image";
import { AiOutlineSearch, AiFillCamera } from 'react-icons/ai'
import { BiMicrophone } from 'react-icons/bi';
import { BsFillMicFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Main: React.FC = () => {
      const [search, setSearch] = useState<string>('');

      const {
            transcript,
            listening,
            resetTranscript,
            browserSupportsSpeechRecognition
      } = useSpeechRecognition();

      const googleLogo: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'

      const router = useRouter();

      const onSearchSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();

            router.push(`https://www.google.com/search?q=${search}`);
      }

      const startListening = () => {
            SpeechRecognition.startListening({ continuous: true, language: 'ENG - VIE' })
      }

      const stopListening = () => {
            SpeechRecognition.stopListening();
            setSearch(transcript);
      }

      if (!browserSupportsSpeechRecognition) {
            return null;
      }

      return (
            <div className="items-center flex flex-col justify-center h-full">
                  <Image
                        src={googleLogo}
                        alt="google"
                        width={270}
                        height={100}
                  />

                  <form className="flex border mt-7 px-5 py-2 rounded-full w-2/5 items-center hover:shadow-md "
                        onSubmit={(e) => onSearchSubmit(e)}
                  >
                        <AiOutlineSearch />
                        <input type="text" className="w-full focus:outline-none ml-4"
                              onChange={(e) => setSearch(e.target.value)}
                              value={search || transcript}
                        />
                        {
                              listening ?
                                    <BsFillMicFill className="text-3xl text-slate-400 mr-5 "
                                          onclick={() => stopListening()}
                                    />
                                    :
                                    <BiMicrophone className="text-3xl text-slate-400 mr-5 "
                                          onclick={() => startListening()}
                                    />
                        }

                        <AiFillCamera className="text-3xl text-slate-400" />
                  </form>

                  <div className="mt-7">
                        <button className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border"
                              onClick={(e) => onSearchSubmit(e)}> Google Search </button>
                        <button className="bg-slate-100 py-2 px-4 text-sm rounded hover:border"
                              onClick={() => router.push('https://www.google.com/doodles')}> I'm feeling Lucky </button>
                  </div>

            </div>
      )
}

export default Main;