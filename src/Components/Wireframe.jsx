import React from "react";
import { Search, Menu, User, Bell, Globe, MessageCircle } from "lucide-react";

const Wireframe = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="font-bold text-xl">
                Immigrant Resource Navigator
              </div>
              <div className="hidden md:flex space-x-6">
                <button className="text-gray-600">Resources</button>
                <button className="text-gray-600">Community</button>
                <button className="text-gray-600">Marketplace</button>
                <button className="text-gray-600">Events</button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="w-5 h-5 text-gray-500" />
              <Bell className="w-5 h-5 text-gray-500" />
              <User className="w-5 h-5 text-gray-500" />
              <Menu className="md:hidden w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold text-center">
              Find Resources & Connect with Your Community
            </h1>
            <div className="w-full max-w-2xl flex">
              <input
                type="text"
                placeholder="Search resources, housing, or community..."
                className="flex-1 p-3 rounded-l-lg border-2 border-r-0"
              />
              <button className="bg-blue-600 text-white px-6 rounded-r-lg">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Access */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Education</h3>
              <ul className="space-y-2 text-sm">
                <li>College Applications</li>
                <li>Scholarships</li>
                <li>Language Classes</li>
                <li>Financial Aid</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Employment</h3>
              <ul className="space-y-2 text-sm">
                <li>Job Listings</li>
                <li>Resume Help</li>
                <li>Training Programs</li>
                <li>Career Advice</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Documents</h3>
              <ul className="space-y-2 text-sm">
                <li>Driver's License</li>
                <li>Social Security</li>
                <li>Healthcare</li>
                <li>Legal Aid</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>Find Groups</li>
                <li>Events</li>
                <li>Mentorship</li>
                <li>Support Network</li>
              </ul>
            </div>
          </div>

          {/* Community Feed */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Community Feed</h3>
              <MessageCircle className="w-5 h-5 text-gray-500" />
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium">Housing Query</div>
                <div className="text-xs text-gray-500">
                  Looking for roommate in downtown area...
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium">Free Furniture</div>
                <div className="text-xs text-gray-500">
                  Moving out, giving away desk and chair...
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <div className="text-sm font-medium">ESL Study Group</div>
                <div className="text-xs text-gray-500">
                  Weekly meetings at community center...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketplace Preview */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Marketplace</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="bg-gray-200 h-32 rounded mb-2"></div>
              <div className="font-medium">1BR Apartment</div>
              <div className="text-sm text-gray-500">
                Available Now • $1200/mo
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="bg-gray-200 h-32 rounded mb-2"></div>
              <div className="font-medium">Used Toyota</div>
              <div className="text-sm text-gray-500">
                2015 • 80k miles • $8000
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="bg-gray-200 h-32 rounded mb-2"></div>
              <div className="font-medium">Free Furniture</div>
              <div className="text-sm text-gray-500">
                Dining Table • Pickup Only
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="bg-gray-200 h-32 rounded mb-2"></div>
              <div className="font-medium">Study Materials</div>
              <div className="text-sm text-gray-500">ESL Books • Free</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wireframe;
