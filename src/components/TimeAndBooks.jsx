import { useState } from 'react'

const books = [
  { title: '★MidSem Examination Timetable', path: '/Documents and Books/Mid_Semester_Examination_Timetable_Autumn_2025-26.pdf' },
  { title: '★Backend Dev Cheatsheet', path: '/Documents and Books/Node Express Mongoose Notes Cheatsheet.pdf' },
  { title: '★Introduction to Mechanical Engineering by Jonathan Wickhert', path: '/Documents and Books/mech by jonathan.pdf' },
  { title: '★Atomic Habits', path: '/Documents and Books/Atomic habits ( PDFDrive ).pdf' },
  { title: '★MS101 EE Lab Schedule', path: '/Documents and Books/MS101 EE.pdf' },
  { title: '★MS101 EE Lecture Schedule', path: '/Documents and Books/MS101 EE Lect.pdf' },
  { title: '★MS101 ME Schedule', path: '/Documents and Books/MS101 ME.pdf' },
  { title: '★Thomas and Finney Calculus and Analytical Geometry', path: '/Documents and Books/Thomas_and_Finney_Calculus_and_Analytica.pdf' },
]

const timetable = [
  { day: 'Mon', slots: [
    { col: 0, colspan: 2, course: 'MA105', room: 'LA201' },
    { col: 2, colspan: 2, course: 'MA105', room: 'LA202', optional: true },
    { col: 4, colspan: 2, course: 'MS101P4', room: 'LA201' },
    { col: 6, colspan: 2, course: 'ME103', room: 'LA201' },
  ]},
  { day: 'Tue', slots: [
    { col: 0, colspan: 2, course: 'ME103', room: 'LA201' },
    { col: 2, colspan: 2, course: 'MA105', room: 'LA201' },
    { col: 4, colspan: 2, course: 'MA105', room: 'LA202', optional: true },
    { col: 9, colspan: 6, course: 'MS101P4', room: 'LABQ1' },
  ]},
  { day: 'Wed', slots: [
    { col: 0, colspan: 2, course: 'MS101P4', room: '102' },
    { col: 5, colspan: 2, course: 'BB101D1', room: 'LH302' },
    { col: 13, colspan: 2, course: 'MA105T9', room: 'LT005' },
  ]},
  { day: 'Thur', slots: [
    { col: 0, colspan: 2, course: 'BB101T5', room: 'LT302' },
    { col: 2, colspan: 2, course: 'ME103', room: 'LA201' },
    { col: 4, colspan: 2, course: 'MA105', room: 'LA201' },
    { col: 6, colspan: 2, course: 'MA105', room: 'LA202', optional: true },
    { col: 9, colspan: 6, course: 'CH117P4', room: 'LABTS' },
  ]},
  { day: 'Fri', slots: [
    { col: 5, colspan: 2, course: 'BB101D1', room: 'LH302' },
    { col: 9, colspan: 6, course: 'MS101D1', room: 'LABQ1' },
  ]},
]

const slots = `ME103 Quiz1 : 11 Aug
ME103 Quiz2 : 25 Aug
MA105 Quiz 1 29 Aug
ME103 Quiz3 : 8 Sep
MID SEM : 13 Sep - 21 Sep
ME103 Quiz4 : 6 Oct
MA105 Quiz 2 : 29 Aug
ME103 Quiz5 3 Nov`

export default function TimeAndBooks() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row gap-3 md:gap-4 p-3 sm:p-4 md:p-5 my-2 md:my-4 mx-2 sm:mx-4 lg:mx-8">
      {/* Books Section */}
      <div className="flex-1 bg-gradient-to-br from-pink-200/20 via-rose-200/20 to-orange-200/20 backdrop-blur-md rounded-xl p-3 sm:p-4 overflow-hidden border border-white/20 shadow-xl">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-rose-600 to-orange-600 text-white py-2 md:py-3 rounded-lg mb-3 md:mb-4 shadow-lg">
          BOOKS & PDFs
        </h4>
        <ol className="space-y-2 text-white text-sm md:text-base">
          {books.map((book, index) => (
            <li key={index}>
              <a
                href={book.path}
                className="hover:text-cyan-300 hover:underline transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {book.title}
              </a>
            </li>
          ))}
        </ol>

        {/* Mess Menu Button - All Screens */}
        <div className="mt-4">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-between shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-white/30"
          >
            <span className="flex items-center gap-2">
              <span className="text-2xl">🍽️</span>
              <span>Current Week Mess Menu</span>
            </span>
            <span className="text-xl">{showMenu ? '▼' : '▶'}</span>
          </button>
          {showMenu && (
            <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4" onClick={() => setShowMenu(false)}>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-2xl overflow-hidden border-4 border-green-400/50 shadow-2xl w-full h-[95vh] max-w-[95vw] sm:max-w-6xl" onClick={(e) => e.stopPropagation()}>
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 sm:p-4 flex items-center justify-between shadow-lg">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl">🍽️</span>
                    <span className="hidden sm:inline">Current Week Mess Menu</span>
                    <span className="sm:hidden">Mess Menu</span>
                  </h3>
                  <button
                    onClick={() => setShowMenu(false)}
                    className="text-white hover:text-red-300 hover:scale-110 text-2xl sm:text-3xl font-bold transition-all"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
                <iframe
                  src="/Documents and Books/CurrentMessMenu.pdf"
                  className="w-full h-[calc(100%-3.5rem)] sm:h-[calc(100%-4rem)]"
                  title="Mess Menu"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Timetable Section */}
      <div className="flex-[2] bg-gradient-to-br from-blue-200/20 via-cyan-200/20 to-teal-200/20 backdrop-blur-md rounded-xl p-3 sm:p-4 overflow-auto scrollbar-hide border border-white/20 shadow-xl">
        <h6 className="text-center text-white text-xl sm:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 py-2 md:py-3 rounded-lg shadow-lg">
          TIMETABLE
        </h6>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-1 text-xs sm:text-sm">
            <thead>
              <tr>
                <th className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-md p-1 sm:p-2 text-white font-bold min-w-[50px] sm:min-w-[60px] shadow-md sticky left-0 z-10">Days</th>
                {['8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00'].map((time) => (
                  <th key={time} className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-md p-1 sm:p-2 text-white font-semibold min-w-[40px] sm:min-w-[45px] shadow-md whitespace-nowrap">
                    {time}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.map((day, idx) => (
                <tr key={idx}>
                  <td className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md p-1 sm:p-2 text-center text-white font-bold shadow-md sticky left-0 z-10">
                    {day.day}
                  </td>
                  {Array.from({ length: 16 }).map((_, colIdx) => {
                    const slot = day.slots.find(s => s.col === colIdx)
                    if (slot) {
                      return (
                        <td
                          key={colIdx}
                          colSpan={slot.colspan}
                          className={`${
                            slot.optional ? 'text-red-700 font-bold bg-gradient-to-br from-red-200 to-red-300' : 'text-white bg-gradient-to-br from-cyan-400 to-blue-400'
                          } rounded-md p-1 sm:p-2 text-center shadow-md hover:shadow-lg transition-shadow whitespace-nowrap`}
                        >
                          <div className="font-bold text-xs sm:text-sm">{slot.course}</div>
                          <small className="text-[10px] sm:text-xs opacity-90">{slot.room}</small>
                        </td>
                      )
                    }
                    // Check if this cell is part of a colspan
                    const isPartOfColspan = day.slots.some(s => 
                      colIdx > s.col && colIdx < s.col + s.colspan
                    )
                    if (isPartOfColspan) return null
                    
                    return <td key={colIdx} className="bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-md p-1 sm:p-2"></td>
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 md:mt-4 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 text-white font-semibold p-3 md:p-4 rounded-lg shadow-lg backdrop-blur-sm">
          <div className="font-bold text-base sm:text-lg mb-2">📅 Important Dates:</div>
          <div className="whitespace-pre-line text-xs sm:text-sm">{slots}</div>
        </div>
      </div>
    </div>
  )
}
