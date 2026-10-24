                  <div className="font-bold text-[#134C65] mb-1">4. ส่งเสริมการใช้บริการซ้ำ</div>
                  <p className="text-slate-600">โปรแกรมสมาชิก Privilege Tiers และโปรโมชั่นตามกลุ่มเพื่อรักษาความสัมพันธ์</p>
                </div>
                <div className="p-3 bg-[#E9F1F6]/50 rounded-xl border border-slate-200/60">
                  <div className="font-bold text-[#134C65] mb-1">5. มีระบบสารสนเทศรองรับ</div>
                  <p className="text-slate-600">โครงสร้างฐานข้อมูลเชิงสัมพันธ์ 9 ตารางรองรับระบบจองและจัดการลูกค้า</p>
                </div>
                <div className="p-3 bg-[#E9F1F6]/50 rounded-xl border border-slate-200/60">
                  <div className="font-bold text-[#134C65] mb-1">6. แบรนด์ดิ้งลักชัวรีชัดเจน</div>
                  <p className="text-slate-600">เอกลักษณ์โทนสี Coastal Whispers ฟ้าใส ขาวมุก กรมท่า และทองแชมเปญ</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-5 bg-[#E9F1F6]/70 rounded-2xl p-6 border border-slate-200">
              <h4 className="text-base font-bold text-[#102D4F] mb-1">ติดต่อเรา (Contact Us)</h4>
              <p className="text-xs text-slate-500 mb-4">
                Marina Valérielle Phuket & Andaman Sea Base
              </p>

              <div className="space-y-3 text-xs mb-5">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-[#134C65]" />
                  <span>Royal Phuket Marina, Pier 4, Koh Kaew, Phuket</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Phone className="w-4 h-4 text-[#134C65]" />
                  <span>+66 (0) 76 892 450 (24/7 Concierge)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Mail className="w-4 h-4 text-[#134C65]" />
                  <span>charter@marinavalerielle.com</span>
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="ชื่อของคุณ"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs"
                />
                <input
                  type="email"
                  placeholder="อีเมลติดต่อ"
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs"
                />
                <textarea
                  placeholder="ข้อความสอบถามเส้นทางหรือจองพิเศษ..."
                  rows={3}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-xs"
                ></textarea>
                <button
                  type="button"
                  onClick={() => alert('ขอบคุณสำหรับข้อความ ทีมงานจะติดต่อกลับอย่างรวดเร็วที่สุด')}
                  className="w-full py-2.5 bg-[#134C65] hover:bg-[#102D4F] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  ส่งข้อความสอบถาม
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-[#134C65]/15 bg-[#E9F1F6]/95 py-10 px-4 sm:px-6 relative z-20 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Anchor className="w-5 h-5 text-[#B69A5A]" />
            <div>
              <span className="font-bold text-[#102D4F] font-serif text-sm">
                Marina Valérielle
              </span>
              <span className="text-slate-400 ml-2">
                © 2026 Luxury Yacht Charters & Marine Escapes. All rights reserved.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://kiratika123456789.github.io/Hotel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#B69A5A] bg-[#102D4F] px-5 py-3 text-xs font-bold text-[#D8BD83] shadow-md transition-all hover:scale-[1.02] hover:bg-[#134C65]"
              aria-label="เปิดเว็บไซต์ Hotel Island"
            >
              Hotel Island <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating ZIP Export Shortcut */}
      <a
          href="https://kiratika123456789.github.io/Hotel/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-[#B69A5A] bg-[#102D4F] px-5 py-3 text-xs font-bold text-[#D8BD83] shadow-xl transition-all hover:scale-105 hover:bg-[#134C65]"
          aria-label="เปิดเว็บไซต์ Hotel Island"
        >
          Hotel Island <ArrowUpRight className="h-4 w-4" />
        </a>

      {/* Interactive Booking Modal with Live Price Calculator */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialPackageId={selectedBookingPkgId}
        priceFont={activePriceFont}
      />
    </div>
  );
}
