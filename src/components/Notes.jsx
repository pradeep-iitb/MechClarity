import { useState } from 'react'

const notesData = {
  MS101: {
    title: 'MS101',
    subtitle: 'Devices and Circuits',
    content: `Barrier potential for Si and Ge are 0.6-0.7 and 0.2 to 0.25 V. In LEDs the e hole combination causes light emission which is continuous not depend on nos of e and hole in diode but transferred by battery.

In diode terminal characteristics i = Is [exp(v/VT)-1] here VT = qv/nKT here n is ideality factor and between 1 to 2, 1 for Ge and 2 for Si. Is for Ge is in order uA and for Si in order nA. Circuit ground is represented by a triangle at wire end while earthing is different represented by parallel lines L to wire in triangle form.

Digital Logic: In this lecture we will study about the hexa decimal system.`
  },
  ME103: {
    title: 'ME103',
    content: `Mechanical engineering derived from greek word mekhanikos. Grading - written quiz 30% In class Quiz 10% Mid sem 20% end sem 40%. Specialised stream - Design, Thermal fluids and Manufacturing.

B.P of H2 is 20K. Computational simulations includes Computational Fluid Dynamics, Finite Volume Method, Dynamic Space Analysis etc.

In power plant, the energy used in compressing the steam obtained after rotating turbine is more then condensing and revaporising because compressing a liquid requires less pv work due to its less volume than a steam at higher volume. Combustion of H2 and O2 is done while taking care of explosion limit.

Block Diagram of a Power plant: HP water @2 --> Boiler --> HP steam @3 --> Turbine --> LP Steam @4 --> Condenser --> LP water @1--> Pump --> HP water@2

Block diagram of a Jet Engine: Low pressure air --> Compressor --> High pre air --> combustor (+Fuel) --> high pre exhaust --> Turbine --> intermediate pre exhaust --> Nozzle --> low pre exhaust

Here compressor is coupled with the Turbine. Nozzle converts high pressure air to low pressure air hence converting the diff energy into kinetic energy by bernouli theorem. Air entering is 21:79 Oxygen and Nitrogen by mass. Rocket propulsion are of many type chemical, electrical, nuclear, ion, etc but mainly chemical propulsion is used. Chemical propulsion can also of 2 type - Liquid and Solid. Solid rockets usually use paste of resin fuels mixed with oxidisers like perchlorites, liquid oxygen, etc and liquid engines uses liquid fuels. In two stage rocket, first stage we use solid propulsion and in second liquid propulsion because liquid is easily controlled by turbo pumps but expensive and solid rockets are used in missiles as they just have to hit target in set radar and stored for much longer time. Most common oxidiser - ammonium perchlorate and solid fuel - HTPB (hydroxy terminated butadiene). If burn rate is less than 1 cm/sec then it is normal burning, if around 10cm/sec then it is deflagration while if it is supersonic (faster than sound) then it leads to explosion or detonation.

When a fuel is burnt in a pipe the rate at which unburnt fuel is burnt is equal to rate at which flame travels called burn rate. In LPG gas stoves, when the rate at which flame burns is less than the rate at which fuel comes then flame extinguish while if greater then it is flashback and to prevent this there are flashback arrestor. When fuel burns, the burning fuel gives the ignition to unburnt fuel this is called self sustained combustion. For subsonic fluids, converging nozzle accelerates the fluid while diverging decelerates the fluid but for supersonic fluids it is reverse.

LRE ~ Block diagram: Fuel and oxidiser separately to turbo pump --> combustion chamber (+Ignitor) --> Nozzle

SRM ~ Block diagram: Solid fuel and oxidiser in combustion chamber --> nozzle --> Exhaust

Producing water on mars: N2H4 --> N2 + 2H2 __ 2H2 + O2 --> 2H2O

In Drilling workpiece holder is called vice or clamp for small one. When the stress experienced by a component is tensile and compressive cycle then it is known as fatigue loading. In a cantilever beam the maximum bending moment is at the fixed end while in simply supported beam it is at the mid span. While in normal loading is static loading. Fluids are substances which can't tolerate shear stress. While solids doesn't deform under shear stress within a limit. In a fluid the shear stress is directly proportional to the rate of shear strain and deform for even an infinitesimal shear stress. In a solid the shear stress is directly proportional to the shear strain and deform only when shear stress exceeds elastic limit.`
  },
  MA105: {
    title: 'MA105',
    subtitle: 'Calculus',
    content: `Rate of increasing for functions: exponential > polynomial > log.

In stirlings approx theorem, (n!)^(1/n) is approx equal to n/e but on exponenting it to power n - is wrong because in original (2nπ)^(1/2n) is approx equal to 1 but on exponenting (2nπ)^(1/2) part become significant.`
  },
  BB101: {
    title: 'BB101',
    subtitle: 'Biology',
    content: `Tutorial 3 -- Carrier individual are the ones which have one disease carrying gene and affected one are with both disease carrying allel ex in case of cf like in a population of 50k let they are R1 R2 ..... R20 and R5 is the affected one then R5R5 is affected one, R1R5 R2R5 R3R5 .... R20R5 and reversing both are carriers and rest are the normal one like R1R2 R1R3 R2R6 .... AND the answers of a and b are 20 and 2.

Extant is the opposite of extinct like dodo and Neanderthals are extinct and human, red panda and also mahatma gandhi are extant species.`
  },
  CH117: {
    title: 'CH117',
    subtitle: 'Chemistry Lab',
    content: 'Chemistry notes will be added soon...'
  },
  CS101: {
    title: 'CS101',
    subtitle: 'Computer Programming',
    content: 'Computer Science notes will be added soon...'
  }
}

export default function Notes() {
  const [activeNote, setActiveNote] = useState(null)

  const buttonColors = [
    'from-blue-600 via-indigo-600 to-purple-600',
    'from-purple-600 via-pink-600 to-red-600',
    'from-green-600 via-teal-600 to-cyan-600',
    'from-orange-600 via-amber-600 to-yellow-600',
    'from-violet-600 via-fuchsia-600 to-pink-600',
    'from-cyan-600 via-blue-600 to-indigo-600',
  ]

  return (
    <div className="bg-gradient-to-br from-slate-900/60 via-indigo-900/60 to-purple-900/60 backdrop-blur-md w-full min-h-[90vh] flex flex-col mt-4 p-3 md:p-6 overflow-y-auto scrollbar-hide border-t-4 border-blue-500">
      <h3 className="text-center font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-4 md:py-6 mb-2 md:mb-4">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
          NOTES
        </span>
      </h3>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 my-4 md:my-6">
        {Object.keys(notesData).map((key, index) => (
          <button
            key={key}
            onClick={() => setActiveNote(activeNote === key ? null : key)}
            className={`h-12 sm:h-14 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-bold text-white bg-gradient-to-r ${buttonColors[index % buttonColors.length]} hover:scale-105 sm:hover:scale-110 hover:rotate-1 sm:hover:rotate-2 hover:shadow-2xl transition-all duration-300 rounded-xl sm:rounded-2xl shadow-lg border-2 border-white/40 backdrop-blur-sm active:scale-95`}
          >
            {key}
          </button>
        ))}
      </div>

      {activeNote && (
        <div className="text-white font-sans p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-800/80 via-indigo-900/80 to-purple-900/80 rounded-2xl sm:rounded-3xl backdrop-blur-lg animate-fade-in border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:border-cyan-300/60 hover:shadow-cyan-400/50 mb-4 md:mb-6">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white py-3 md:py-4 rounded-xl md:rounded-2xl shadow-xl border-2 border-white/20">
            {notesData[activeNote].title}
          </h4>
          {notesData[activeNote].subtitle && (
            <h5 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 text-center">
              {notesData[activeNote].subtitle}
            </h5>
          )}
          <div className="whitespace-pre-line leading-relaxed text-gray-100 text-sm sm:text-base md:text-lg bg-black/20 p-4 sm:p-5 md:p-6 rounded-xl backdrop-blur-sm max-h-[60vh] overflow-y-auto scrollbar-hide">
            {notesData[activeNote].content}
          </div>
          {activeNote === 'ME103' && (
            <div className="mt-4 md:mt-6 flex justify-center">
              <img
                src="/Images/Screenshot 2025-08-12 084728.png"
                alt="ME103 Diagram"
                className="max-h-48 sm:max-h-56 md:max-h-64 w-auto rounded-xl md:rounded-2xl shadow-2xl border-2 md:border-4 border-cyan-400/50 hover:scale-105 hover:border-cyan-300 transition-all duration-300"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
