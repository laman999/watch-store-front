import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  AiOutlinePlusCircle, 
  AiOutlineUnorderedList, 
  AiOutlineLogout, 
  AiOutlineDelete,
  AiOutlineShopping 
} from 'react-icons/ai';

const Admin = () => {
  const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('add'); 
  const [products, setProducts] = useState([]);      
  const [orders, setOrders] = useState([]); 
  const [editingId, setEditingId] = useState(null); 
  const [newProduct, setNewProduct] = useState({     
    name: '',
    price: '',
    image: '',
    category: 'men'
  });

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Məhsullar gətirilərkən xəta:", err);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:3000/orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Sifarişlər gətirilərkən xəta:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, [activeTab]);

  const startEdit = (product) => {
    setEditingId(product.id);
    setNewProduct({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    setActiveTab('add');
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId 
      ? `http://localhost:3000/products/${editingId}` 
      : "http://localhost:3000/products";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        alert(editingId ? "Məhsul yeniləndi!" : "Məhsul əlavə edildi!");
        setNewProduct({ name: '', price: '', image: '', category: 'men' });
        setEditingId(null);
        setActiveTab('list');
      }
    } catch (error) {
      console.error("Xəta:", error);
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Bu məhsulu silməkdən əminsiniz?")) {
      try {
        await fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" });
        setProducts(products.filter(p => p.id !== id));
      } catch (err) {
        console.error("Silinərkən xəta:", err);
      }
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      const res = await fetch(`http://localhost:3000/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });

      if (res.ok) {
        setOrders(orders.map(order => 
          order.id === orderId ? { ...order, status: newStatus } : order
        ));
      }
    } catch (err) {
      console.error("Status yenilənərkən xəta:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      
      <div className="w-64 bg-[#0A0A0A] border-r border-white/5 p-6 flex flex-col fixed h-full shadow-2xl">
        <h2 className="text-[#D4AF37] font-serif italic text-xl mb-10 tracking-widest text-center">
          DREAM WATCH
        </h2>

        <nav className="flex-1 space-y-4">
          <button 
            onClick={() => { setActiveTab('add'); setEditingId(null); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-[10px] tracking-widest uppercase ${activeTab === 'add' ? 'bg-[#D4AF37] text-black font-bold' : 'hover:bg-white/5 text-gray-400'}`}
          >
            <AiOutlinePlusCircle size={18} /> Məhsul Əlavə Et
          </button>

          <button 
            onClick={() => setActiveTab('list')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-[10px] tracking-widest uppercase ${activeTab === 'list' ? 'bg-[#D4AF37] text-black font-bold' : 'hover:bg-white/5 text-gray-400'}`}
          >
            <AiOutlineUnorderedList size={18} /> Məhsul Siyahısı
          </button>

          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-[10px] tracking-widest uppercase ${activeTab === 'orders' ? 'bg-[#D4AF37] text-black font-bold' : 'hover:bg-white/5 text-gray-400'}`}
          >
            <AiOutlineShopping size={18} /> Sifarişlər
          </button>
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-lg transition-all text-[10px] tracking-widest uppercase font-bold"
        >
          <AiOutlineLogout size={18} /> Çıxış
        </button>
      </div>

      <div className="flex-1 ml-64 p-10">
        
        {activeTab === 'add' && (
          <div className="max-w-2xl mx-auto mt-10">
            <h1 className="text-2xl font-serif italic text-[#D4AF37] mb-8 uppercase tracking-widest">
              {editingId ? "Məhsulu Redaktə Et" : "Yeni Saat Əlavə Et"}
            </h1>
            <form onSubmit={handleAddProduct} className="space-y-6 bg-[#0A0A0A] p-8 border border-white/5 rounded-xl shadow-xl">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Saatın Modeli</label>
                <input 
                  type="text" 
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#D4AF37] transition-all"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">Qiymət ($)</label>
                  <input 
                    type="number" 
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    className="bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#D4AF37] transition-all"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500">Kateqoriya</label>
                  <select 
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    className="bg-[#0A0A0A] border-b border-white/10 py-2 outline-none text-gray-300"
                  >
                    <option value="men">Kişi</option>
                    <option value="women">Qadın</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Şəkil URL</label>
                <input 
                  type="text" 
                  value={newProduct.image}
                  onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                  className="bg-transparent border-b border-white/10 py-2 outline-none focus:border-[#D4AF37] transition-all"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-[#D4AF37] text-black font-bold py-4 uppercase tracking-[0.2em] text-[11px] hover:bg-white transition-all">
                {editingId ? "Dəyişiklikləri Yadda Saxla" : "Məhsulu Əlavə Et"}
              </button>
            </form>
          </div>
        )}

        {activeTab === 'list' && (
          <div className="w-full">
            <h1 className="text-2xl font-serif italic text-[#D4AF37] mb-8 uppercase tracking-widest">Məhsul Siyahısı</h1>
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
              <table className="w-full text-left">
                <thead className="bg-white/[0.02] border-b border-white/5 uppercase text-[10px] tracking-widest text-gray-500">
                  <tr>
                    <th className="p-4">Şəkil</th>
                    <th className="p-4">Ad</th>
                    <th className="p-4">Kateqoriya</th>
                    <th className="p-4">Qiymət</th>
                    <th className="p-4 text-right">Əməliyyat</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {products.map(p => (
                    <tr key={p.id} className="border-b border-white/5 hover:bg-white/[0.01]">
                      <td className="p-4"><img src={p.image} className="w-12 h-12 object-contain" alt=""/></td>
                      <td className="p-4 font-light">{p.name}</td>
                      <td className="p-4 uppercase text-[10px] text-gray-400">{p.category}</td>
                      <td className="p-4 text-[#D4AF37] font-medium">${p.price}</td>
                      <td className="p-4 text-right">
                        <div className='flex justify-end items-center gap-4'>
                          <button onClick={() => startEdit(p)} className="text-gray-400 hover:text-blue-400 transition-all text-xs border-b border-transparent hover:border-blue-400">
                            Edit
                          </button>
                          <button onClick={() => deleteProduct(p.id)} className="text-gray-500 hover:text-red-500 transition-all">
                            <AiOutlineDelete size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="w-full">
            <h1 className="text-2xl font-serif italic text-[#D4AF37] mb-8 uppercase tracking-widest">Gələn Sifarişlər</h1>
            <div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
              <table className="w-full text-left">
                <thead className="bg-white/[0.02] border-b border-white/5 uppercase text-[10px] tracking-widest text-gray-500">
                  <tr>
                    <th className="p-4">Müştəri</th>
                    <th className="p-4">Ünvan</th>
                    <th className="p-4">Məbləğ</th>
                    <th className="p-4">Tarix</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-300">
                  {orders.length > 0 ? orders.map(order => (
                    <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.01]">
                      <td className="p-4 font-medium text-white">{order.fullName}</td>
                      <td className="p-4 text-xs">{order.address}</td>
                      <td className="p-4 text-[#D4AF37] font-bold">${order.totalPrice}</td>
                      <td className="p-4 text-[10px] text-gray-500">{order.orderDate}</td>
                      <td className="p-4">
                        <select 
                          value={order.status || "Gözləmədə"} 
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className={`bg-transparent border border-white/10 rounded px-2 py-1 text-[10px] outline-none transition-all cursor-pointer ${
                            order.status === 'Gözləmədə' ? 'text-yellow-500 border-yellow-500/20' : 
                            order.status === 'Kuryerdə' ? 'text-blue-400 border-blue-400/20' : 
                            order.status === 'Ləğv edildi' ? 'text-red-500 border-red-500/20' :
                            'text-green-500 border-green-500/20'
                          }`}
                        >
                          <option className="bg-[#0A0A0A]" value="Gözləmədə">Gözləmədə</option>
                          <option className="bg-[#0A0A0A]" value="Kuryerdə">Kuryerdə</option>
                          <option className="bg-[#0A0A0A]" value="Çatdırıldı">Çatdırıldı</option>
                          <option className="bg-[#0A0A0A]" value="Ləğv edildi">Ləğv edildi</option>
                        </select>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="5" className="p-10 text-center text-gray-500 italic font-light">Hələ heç bir sifariş yoxdur.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;