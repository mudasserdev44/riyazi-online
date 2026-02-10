import { BookOpen, Facebook, Globe, Instagram, Phone, Twitter } from "lucide-react";

export default function Topbar () {
    return(
        <div className="bg-gradient-to-r from-cyan-200 to-teal-200 py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-700">
                        <div className="w-8 h-8 rounded-full border-2 border-gray-700 flex items-center justify-center">
                            <BookOpen size={16} />
                        </div>
                        <div>
                            <div className="font-semibold">Monday - Friday</div>
                            <div className="text-xs">8:00AM-8:00PM</div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    {/* <div className="flex items-center gap-2 text-gray-700">
                        <Phone size={16} />
                        <div>
                            <div className="text-xs">Call Us</div>
                            <div className="font-semibold">+92 XXX XXXX XXX</div>
                        </div>
                    </div> */}
                    <div className="flex gap-3">
                        <a
                            href="#"
                            className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition"
                        >
                            <Facebook size={16} />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition"
                        >
                            <Twitter size={16} />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition"
                        >
                            <Instagram size={16} />
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition"
                        >
                            <Globe size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}