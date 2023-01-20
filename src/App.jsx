import Footer from "./components/Footer";
import Header from "./components/Header";
import MiApi from "./components/MiApi";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-400">
      <Header />
      <MiApi />
      <Footer />
    </div>
  );
}

export default App;
