import { Plus, Zap } from 'lucide-react'
import React from 'react'

type State = {
    name: string;
    price: number;
    status: boolean;
}

export default function UserInterface() {
    const users = [
        {
            name: "Tran Van Hung",
            price: 550000,
            status: true,
        },
        {
            name: "Le Thi Mai",
            price: 780000,
            status: false,
        },
        {
            name: "Pham Minh Duc",
            price: 420000,
            status: true,
        },
    ]
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.getItem(JSON.parse("users"));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    return (
        <div className='bg-gray-200 min-h-screen p-4 sm:p-6 md:p-10'>
        <div className='font-bold bg-yellow-500 flex justify-center item-center text-[30px] text-white h-20 rounded-lg gap-2 py-4'>
            <Zap className='text-white size-9'/>
            Quan ly hoa don tien dien
        </div><br /><br />

        <div className='bg-white h-45 rounded-[20px] shadow-sm'>
            <div className='flex justify-left align-center gap-1 text-[15px] py-5 pl-10'>
                <Plus /> Them hoa don moi
            </div>
            <div className='py-5 pl-10 flex gap-10'>
                <input className='border rounded-lg h-10 w-50' placeholder=' Ten chu ho' type="text" />
                <input className='border rounded-lg h-10 w-50' placeholder=' So tien' type="text" />
                <select className='border rounded-lg h-10 w-50' name="" id="">;
                    <option value="">Chua thanh toan</option>
                    <option value="">Da thanh toan</option>
                </select>
                <button className='border rounded-lg bg-blue-400 text-white w-20 h-10'>Them</button>
            </div>
        </div><br /><br />

        <div className='bg-white h-90 rounded-[20px] shadow-sm py-5 pl-10'>
            <h2 className='py-5 text-[20px]'>Danh sach hoa don</h2>
            <table className='border className="w-full text-left text-sm text-gray-700 border-gray-200 rounded-md w-300'>
                <tr className="bg-gray-50 border-b border-gray-200">
                    <th className=''>&nbsp; Ten chu ho</th>
                    <th>&nbsp; So tien (VND)</th>
                    <th>&nbsp; Trang thai</th>
                    <th>&nbsp; Hang dong</th>
                </tr>
                <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 border-r border-gray-100 text-blue-400">
                        Tran Van Hung
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100">
                        550.000
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded">
                        Da thanh toan
                    </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                    <button className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50">
                        Sua
                    </button>
                    <button className="text-red-600 border border-red-600 rounded px-3 py-1 text-sm hover:bg-red-50">
                        Xoa
                    </button>
                    </td>
                </tr>
                <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 border-r border-gray-100 text-blue-400">
                        Le Thi Mai
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100">
                        780.000
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100">
                    <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded">
                        Chua thanh toan
                    </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                    <button className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50">
                        Sua
                    </button>
                    <button className="text-red-600 border border-red-600 rounded px-3 py-1 text-sm hover:bg-red-50">
                        Xoa
                    </button>
                    </td>
                </tr>
                <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 border-r border-gray-100 text-blue-400">
                        Pham Minh Duc
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100">
                        420.000
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100">
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded">
                        Da thanh toan
                    </span>
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                    <button className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50">
                        Sua
                    </button>
                    <button className="text-red-600 border border-red-600 rounded px-3 py-1 text-sm hover:bg-red-50">
                        Xoa
                    </button>
                    </td>
                </tr>
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
    )
}