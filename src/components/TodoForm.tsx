import React, { useRef } from 'react'

interface TodoFromProps {
    onAdd: (title: string) => void
}

export const TodoForm: React.FC<TodoFromProps> = ({onAdd}) => {
    // const [state, setState] = useState<string>('')
    const input = useRef<HTMLInputElement>(null)

    // const onChangeInputTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setState(event.target.value)
    //     console.log(state)
    // }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === "Enter"){
            onAdd(input.current!.value)
            input.current!.value = '' 
        }
    }

    return (
        <div className="input-field mt2 px1">
            <input ref={input} type="text" id="title" placeholder="Введите название дела" onKeyPress={keyPressHandler} />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}
