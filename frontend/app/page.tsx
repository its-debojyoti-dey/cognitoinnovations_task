import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold">Welcome to Cognito Innovations</h1>
        </div>
    </main>
    <Footer/>
    </>
   
  );
}
