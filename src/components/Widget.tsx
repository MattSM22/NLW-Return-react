import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

/* Estado = É uma variavel como qualquer outra, 
            porém o react observa esse estado dessa variavel, 
            visualizando se a alteração ocorreu, caso ocorra muda a interface 

    É de suma importância deixar frizado que a notação rem utiliza uma detonatação de tamanho diferente do pixel,
    no caso o rem está sendo mais utilizado por dar uma resposta mais responsiva aos designs dos sites.

    1 px -> 1px de tela
    1 rem -> 16px de tela

    Ex.: font-size: 2rem -> 8px === Isso porque 16 * 0.5 = 8
*/  

export function Widget(){
    return (
        <Popover className="absolute bottom-4 right-4 flex flex-col items-end md:bottom-8 md:right-8">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>
            

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-7 h-7" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}