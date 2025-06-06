import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BuscaTuDepa</title>
        <meta name="description" content="Encuentra el departamento perfecto" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-600">Bienvenido a BuscaTuDepa</h1>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-xl">
          Encuentra tu departamento ideal en la ciudad de manera fácil. Muy pronto podrás buscar en el mapa y ver un listado de opciones disponibles.
        </p>
      </main>
    </>
  )
}
