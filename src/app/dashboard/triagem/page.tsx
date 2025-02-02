export default function Page() {
    return (
        <>

            <div className="flex flex-col gap-4 p-4 mx-auto max-w-7xl">
                <h1 className="text-4xl text-center">Ficha de Triagem infantil</h1>
                <h1 className="text-2xl">Identificação</h1>
                <hr className="border-1 border-black/10" />
            </div>
            <form action="POST">
                <div className="grid grid-cols-2 gap-4 p-4 mx-auto max-w-7xl">
                    <div className="col-span-2">
                        <label htmlFor="nome">Nome da Criança:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="nome" id="nome" />
                    </div>
                    <div></div>
                    <div className="">
                        <label htmlFor="data_nascimento">Data de Nascimento:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="date" className="bg-zinc-300 w-full" name="data_nascimento" id="data_nascimento" />
                    </div>
                    <div className="w-[40%]">
                        <label htmlFor="data_nascimento">Sexo:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="data_nascimento" id="data_nascimento" />
                    </div>
                    <div>

                    </div>
                    <hr className="border-1 border-black/10 col-span-3" />
                    <div className="col-span-2">
                        <label htmlFor="nome">Responsável:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="nome" id="nome" />
                    </div>
                    <div></div>
                    <div className="col-span-1">
                        <label htmlFor="nome">Parentesco:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="nome" id="nome" />
                    </div>
                    <div className="">
                        <label htmlFor="data_nascimento">Data de Nascimento Responsável:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="date" className="bg-zinc-300 w-full" name="data_nascimento" id="data_nascimento" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-4 mx-auto max-w-7xl">
                    <h1 className="text-2xl">Contato</h1>
                    <hr className="border-1 border-black/10" />
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 mx-auto max-w-7xl">
                    <div>
                        <label htmlFor="residencial">Residencial:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="residencial" id="residencial" />
                    </div>
                    <div>
                        <label htmlFor="residencial">Cidade:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="residencial" id="residencial" />
                    </div>
                    <div>
                        <label htmlFor="residencial">Bairro:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="residencial" id="residencial" />
                    </div>
                    <div>
                        <label htmlFor="residencial">Telefone 1:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="residencial" id="residencial" />
                    </div>
                    <div>
                        <label htmlFor="residencial">Telefone 2:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="residencial" id="residencial" />
                    </div>
                    <div>
                        <label htmlFor="residencial">Email:</label>
                        <hr className="border-1 border-black w-[50%]" />
                        <input type="text" className="bg-zinc-300 w-full" name="residencial" id="residencial" />
                    </div>

                </div>
            </form>
        </>
    )
};
