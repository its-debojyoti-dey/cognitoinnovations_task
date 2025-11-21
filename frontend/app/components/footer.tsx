"use client"

import { Facebook, Instagram, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import Logo from "./logo"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
    {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <Logo/>

          <p className="text-sm text-gray-600 leading-relaxed">
            FoodTrove is the biggest market of grocery products. Get your daily needs from our store.
          </p>

          {/* Contact Info */}
          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
              <a href="mailto:example@email.com" className="text-sm text-gray-600 hover:text-gray-900">
                example@email.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
              <a href="tel:+911234567890" className="text-sm text-gray-600 hover:text-gray-900">
                +91 123 4567890
              </a>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-6">
          <h4 className="font-bold text-gray-900 text-sm">Company</h4>
          <nav className="space-y-3">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              About Us
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Delivery Information
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Privacy Policy
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Terms & Conditions
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Contact Us
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Support Center
            </a>
          </nav>
        </div>

        {/* Category Links */}
        <div className="space-y-6">
          <h4 className="font-bold text-gray-900 text-sm">Category</h4>
          <nav className="space-y-3">
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Dairy & Bakery
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Fruits & Vegetable
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Snack & Spice
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Juice & Drinks
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Chicken & Meat
            </a>
            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900 transition">
              Fast Food
            </a>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-6">
          <h4 className="font-bold text-gray-900 text-sm">Subscribe Our Newsletter</h4>

          {/* Newsletter Input */}
          <div className="flex bg-white border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Search here..."
              className="flex-1 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none bg-white"
            />
            <button className="px-4 py-3 text-red-500 hover:text-red-600 transition">
              <Send className="w-5 h-5" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Product Images */}
          <div className="grid grid-cols-5 gap-2 pt-2">
            {[
              "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1599599810694-14ae90a400c9?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop",
            ].map((src, i) => (
              <div key={i} className="w-full aspect-square rounded overflow-hidden">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Product ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 pt-8">
        {/* Bottom Copyright */}
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-600">
            © 2025 <span className="text-red-500 font-semibold">foodzy</span>. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer