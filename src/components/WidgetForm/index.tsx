/* 
    Com relação a responsividade dos dispositivos: O interessante do Tailwind é poder fazer tudo dentro de uma classe unica sem precisar de varias linhas de código,
    md -> Media Queries de tela, existe MD -> Medium, SM -> Small e LG -> Large.
    calc -> Necessário deixar tudo junto para não ocorrer erros
    vw -> Notação para Viewport Width, que no caso significa o tamanho do horizontal do dispositivo que a aplicação está rodando.
    leading -> Significa sobrescreção de texto, lineHeight.
    underfline-offset -> Serve para dar um espaço entre o texto e o underline.

    quando eu indico um Object.entries, ele cria um array de array, então basicamente ele divide o objeto em um array maior com outro array com os dados dentro, facilitando
    o acesso entre chave e objeto

    Utilizar uma arrow function em um evento de onClick, serve para setar informações no useState.
    Utilizando typescript conseguindo fazer com que o estado tenha plena consciência das informações que pode receber.
*/

import { CloseButton } from "../CloseButton";
import { useState } from "react";
import { FeedBackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedBackSuccessStep } from "./Steps/FeedbackSuccessStep";



export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedBackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400 ">
                Feito com ❤ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}