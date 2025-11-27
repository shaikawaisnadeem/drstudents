export default function SelectState (){
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">

            <select
              className="
                px-4 py-3 w-[200px] rounded-lg bg-white text-black font-medium cursor-pointer
                max-h-48 overflow-y-auto
                scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400
              "
            >
              <option>Select State</option>

              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
              <option>Andaman & Nicobar Islands</option>
              <option>Chandigarh</option>
              <option>Dadra & Nagar Haveli</option>
              <option>Daman & Diu</option>
              <option>Delhi</option>
              <option>Jammu & Kashmir</option>
              <option>Ladakh</option>
              <option>Puducherry</option>
            </select>

            <select className="px-4 py-3 w-[200px] rounded-lg bg-white text-black font-medium cursor-pointer">
              <option>Select Stream</option>
              <option>Medical</option>
              <option>BDS</option>
              <option>Nursing</option>
            </select>

            <button className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition">
              Search
            </button>
          </div>
    )
}