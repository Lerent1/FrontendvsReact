import { Plus, Zap } from 'lucide-react';
import React, { useState, useEffect } from 'react';

type Invoice = {
  id: number;
  name: string;
  price: number;
  status: boolean;
};

export default function Hackathon06() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('invoices');
    if (data) {
      setInvoices(JSON.parse(data));
    } else {
      const initial: Invoice[] = [
        { 
            id: 1, 
            name: 'Tran Van Hung', 
            price: 550000, 
            status: true 
        },
        { 
            id: 2, 
            name: 'Le Thi Mai', 
            price: 780000, 
            status: false 
        },
        { 
            id: 3, 
            name: 'Pham Minh Duc', 
            price: 420000, 
            status: true 
        },
      ];
      setInvoices(initial);
      localStorage.setItem('invoices', JSON.stringify(initial));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }, [invoices]);

  const handleSave = () => {
    if (!name || !price) return alert('Vui lòng nhập đầy đủ thông tin!');

    if (editingId !== null) {
      setInvoices(
        invoices.map(inv =>
          inv.id === editingId ? { ...inv, name, price: Number(price), status } : inv
        )
      );
      setEditingId(null);
    } else {
      const newInvoice: Invoice = {
        id: invoices.length ? invoices[invoices.length - 1].id + 1 : 1,
        name,
        price: Number(price),
        status,
      };
      setInvoices([...invoices, newInvoice]);
    }
    setName('');
    setPrice('');
    setStatus(false);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
      setInvoices(invoices.filter(inv => inv.id !== id));
    }
  };

  const handleEdit = (inv: Invoice) => {
    setName(inv.name);
    setPrice(inv.price.toString());
    setStatus(inv.status);
    setEditingId(inv.id);
  };

  const toggleStatus = (id: number) => {
    setInvoices(
      invoices.map(inv => (inv.id === id ? { ...inv, status: !inv.status } : inv))
    );
  };

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <div className="font-bold bg-yellow-500 flex justify-center items-center text-2xl text-white h-20 rounded-lg gap-2 py-4">
        <Zap className="text-white" />
        Quản lý hóa đơn tiền điện
      </div>

      <div className="bg-white mt-8 p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-2 text-lg mb-4">
          <Plus />
          {editingId ? 'Sửa hóa đơn' : 'Thêm hóa đơn mới'}
        </div>
        <div className="flex gap-4 flex-wrap">
          <input
            className="border rounded-lg h-10 px-3"
            placeholder="Tên chủ hộ"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
          />
          <input
            className="border rounded-lg h-10 px-3"
            placeholder="Số tiền"
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="number"
          />
          <select
            className="border rounded-lg h-10 px-3"
            value={status ? 'paid' : 'unpaid'}
            onChange={e => setStatus(e.target.value === 'paid')}
          >
            <option value="unpaid">Chưa thanh toán</option>
            <option value="paid">Đã thanh toán</option>
          </select>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleSave}
          >
            {editingId ? 'Lưu' : 'Thêm'}
          </button>
        </div>
      </div>

      <div className="bg-white mt-8 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Danh sách hóa đơn</h2>
        <table className="w-full text-left border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-r">Tên chủ hộ</th>
              <th className="px-4 py-2 border-r">Số tiền (VND)</th>
              <th className="px-4 py-2 border-r">Trạng thái</th>
              <th className="px-4 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id} className="border-b">
                <td className="px-4 py-2 text-blue-600">{inv.name}</td>
                <td className="px-4 py-2">{inv.price.toLocaleString()}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                      inv.status ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {inv.status ? 'Đã thanh toán' : 'Chưa thanh toán'}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-green-600 border border-green-600 px-3 py-1 rounded hover:bg-green-50"
                    onClick={() => handleEdit(inv)}
                  >
                    Sửa
                  </button>
                  <button
                    className="text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-50"
                    onClick={() => handleDelete(inv.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
            {invoices.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 text-gray-700 text-sm select-none">
            <nav className="flex items-center gap-1">
                <button className="p-1 rounded text-gray-400 hover:bg-gray-200">
                    &lt;
                </button>
                <button className="px-3 py-1 rounded border border-blue-600 bg-blue-600 text-white font-semibold">
                    1
                </button>
                <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
                <button className="px-3 py-1 rounded hover:bg-gray-100">4</button>
                <span className="px-2">...</span>
                <button className="px-3 py-1 rounded hover:bg-gray-100">20</button>
                <button className="p-1 rounded text-gray-600 hover:bg-gray-200">
                    &gt;
                </button>
            </nav>

            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700"
                title="Chon ban ghi">
                <option value="1" selected>1 ban ghi / trang</option>
                <option value="2">2 ban ghi / trang</option>
                <option value="3">3 ban ghi / trang</option>
                <option value="4">4 ban ghi / trang</option>
                <option value="5">5 ban ghi / trang</option>
            </select>
            </div>
      </div>
    </div>
  );
}
