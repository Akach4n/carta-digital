import { useState, useMemo } from 'react'
import { TOCARTA_MOCK } from './platos'
import './App.css'

function App() {
  const [platoSeleccionado, setPlatoSeleccionado] = useState(null);
  const [pedido, setPedido] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

  /* ================= ESTADOS Y LOGICA DEL PEDIDO ================= */
  const agregarAlPedido = (plato) => {
    setPedido((pedidoActual) => {
      const existe = pedidoActual.find((item) => item.id === plato.id);
      if (existe) {
        return pedidoActual.map((item) =>
          item.id === plato.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...pedidoActual, { ...plato, cantidad: 1 }];
    });
  };

  const manejarConfirmarPedido = () => {
    setPedidoConfirmado(true);

    setTimeout(() => {
      setPedidoConfirmado(false);
      setPedido([]);
    }, 2000);
  };


  const restarDelPedido = (id) => {
    setPedido((pedidoActual) => {
      const plato = pedidoActual.find((item) => item.id === id);
      if (plato.cantidad === 1) {
        return pedidoActual.filter((item) => item.id !== id);
      }
      return pedidoActual.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      );
    });
  };

  /* ================= CALCULOS OPTIMIZADOS ================= */
  const totalPrecio = useMemo(() => {
    return pedido.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }, [pedido]);

  const totalProductos = useMemo(() => {
    return pedido.reduce((acc, item) => acc + item.cantidad, 0);
  }, [pedido]);

  return (
    <main className="bg-linear-to-b from-[#121019] to-[#07060c] min-h-screen text-white relative overflow-x-hidden flex flex-col items-center">

      {/* ================= HEADER ================= */}
      <header className="w-full max-w-7xl sticky top-0 z-40 bg-[#121019]/80 backdrop-blur-md border-b border-slate-800/50 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-300">
          TECH CARTA
        </h1>

        <button
          onClick={() => setCarritoAbierto(true)}
          className="relative bg-slate-900 border border-slate-800 px-5 py-2.5 rounded-xl cursor-pointer hover:bg-slate-800 transition-colors font-bold text-sm flex items-center gap-2"
        >
          🛒 <span>Mi Pedido</span>
          {totalProductos > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-black w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
              {totalProductos}
            </span>
          )}
        </button>
      </header>

      {/* ================= GRID DE PLATOS ================= */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 xl:gap-8 max-w-7xl w-full mx-auto p-6 pt-10">
        {TOCARTA_MOCK.map((plato) => (
          <li
            onClick={() => setPlatoSeleccionado(plato)}
            key={plato.id}
            className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 text-white font-semibold p-4 rounded-2xl cursor-pointer hover:-translate-y-3.5 transition-transform duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <img
                src={plato.imagen}
                alt={plato.nombre}
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="text-lg font-bold leading-tight">{plato.nombre}</h3>
            </div>
            <p className="text-orange-400 mt-2 font-black text-xl">{plato.precio.toFixed(2)}€</p>
          </li>
        ))}
      </ul>

      {/* ================= MODAL DETALLE ================= */}
      {platoSeleccionado && (
        <div onClick={() => setPlatoSeleccionado(null)} className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-2xl w-full relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <img
              src={platoSeleccionado.imagen}
              alt={platoSeleccionado.nombre}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
            <button
              onClick={() => setPlatoSeleccionado(null)}
              className="cursor-pointer absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <span className="text-xs uppercase tracking-widest text-orange-400 font-bold">
              {platoSeleccionado.categoria}
            </span>
            <h2 className="text-3xl font-black text-white mt-1">{platoSeleccionado.nombre}</h2>

            <p className="text-gray-400 mt-4 text-lg leading-relaxed">
              {platoSeleccionado.descripcion}
            </p>

            {platoSeleccionado.alergenos.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Alérgenos:</h4>
                <div className="flex gap-2">
                  {platoSeleccionado.alergenos.map((alergeno) => (
                    <span
                      key={alergeno}
                      className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full capitalize"
                    >
                      ⚠️ {alergeno.replace('-', ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800">
              <span className="text-3xl font-black text-white">{platoSeleccionado.precio.toFixed(2)}€</span>
              <button
                onClick={() => {
                  agregarAlPedido(platoSeleccionado);
                  setPlatoSeleccionado(null);
                }}
                className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-orange-500/25 cursor-pointer"
              >
                Añadir al pedido
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= SIDEBAR CARRITO ================= */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-slate-950/95 border-l border-slate-800/80 p-6 z-50 shadow-2xl transform transition-transform duration-300 backdrop-blur-lg flex flex-col justify-between ${carritoAbierto ? 'translate-x-0' : 'translate-x-full'}`}>
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h2 className="text-xl font-black">Tu Pedido</h2>
            <button onClick={() => setCarritoAbierto(false)} className="text-gray-400 hover:text-white cursor-pointer text-xl">✕</button>
          </div>

          <div className="mt-6 overflow-y-auto max-h-[65vh] space-y-4 pr-1">
            {pedido.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">El carrito está vacío</p>
            ) : (
              pedido.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-slate-900/50 p-3 rounded-xl border border-slate-800/30">
                  <div className="flex-1 pr-2">
                    <h4 className="font-bold text-sm break-all whitespace-normal leading-tight">{item.nombre}</h4>
                    <p className="text-orange-400 text-xs font-semibold">{(item.precio * item.cantidad).toFixed(2)}€</p>
                  </div>

                  <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1.5">
                    <button onClick={() => restarDelPedido(item.id)} className="px-2 py-0.5 text-xs bg-slate-700 rounded hover:bg-slate-600 cursor-pointer font-bold">-</button>
                    <span className="text-xs font-bold px-1 min-w-3 text-center">{item.cantidad}</span>
                    <button onClick={() => agregarAlPedido(item)} className="px-2 py-0.5 text-xs bg-slate-700 rounded hover:bg-slate-600 cursor-pointer font-bold">+</button>
                  </div>

                </div>

              ))
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <div className="flex items-center justify-between text-lg font-black mb-4">
            <span>Total:</span>
            <span className="text-orange-400">{totalPrecio.toFixed(2)}€</span>
          </div>
          <div className="flex flex-col gap-4">

            <button
              disabled={pedido.length === 0}
              onClick={() => setPedido([])}
              className="w-full bg-red-950/40 border border-red-500/30 hover:bg-red-600 hover:text-white disabled:bg-slate-800 disabled:text-gray-600 disabled:border-transparent disabled:cursor-not-allowed text-red-200 font-bold py-3 rounded-xl transition-all cursor-pointer text-center"
            >Vaciar carrito </button>
            {pedidoConfirmado ? (
              <div className="flex items-center justify-center gap-2 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl w-full">
                <svg
                  className="w-5 h-5 stroke-current fill-none text-emerald-400 animate-bounce"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400 font-bold">Pedido confirmado</span>
              </div>
            ) : (
              <button
                disabled={pedido.length === 0}
                onClick={manejarConfirmarPedido} // <-- Vinculamos la nueva función aquí
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-800 disabled:text-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all cursor-pointer text-center"
              >
                Confirmar Pedido
              </button>
            )}
          </div>
        </div>
      </div>

    </main>
  )
}

export default App