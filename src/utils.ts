export function deepUpdate(d1: Record<string, any>, d2: Record<string, any>): Record<string, any> {
   const ret = { ...d1 }

   for (const [ key, value ] of Object.entries(d2)) {
      if (!(key in d1)) {
         ret[key] = value
      } else if (typeof value === 'object') {
         ret[key] = deepUpdate(d1[key], value)
      } else {
         ret[key] = value
      }
   }

   return ret
}

export function hEven2Time(heven: number): string {
   const hevenStr = heven.toString()
   if (hevenStr.length === 6) {
      return `${hevenStr.slice(0, 2).padStart(2, '0')}:${hevenStr.slice(2, 4)}:${hevenStr.slice(4)}`
   }
   return `${hevenStr.slice(0, 1).padStart(2, '0')}:${hevenStr.slice(1, 3)}:${hevenStr.slice(3)}`
}

export function dEven2Date(deven: number): string {
   const devenStr = deven.toString()
   const year = devenStr.slice(0, 4)
   const month = devenStr.slice(4, 6)
   const day = devenStr.slice(6).padStart(2, '0')
   return `${year}-${month}-${day}`
}

export function even2JDate(dEven: number, hEven: number): Date {
   return new Date(`${hEven2Time(dEven)} ${dEven2Date(hEven)}`)
}

export function hEvenValidation(hEven: number): boolean {
   const hEvenStr = hEven.toString()
   if (hEvenStr.length === 6) {
      const hour = parseInt(hEvenStr.slice(0, 2))
      const minute = parseInt(hEvenStr.slice(2, 4))
      const second = parseInt(hEvenStr.slice(4))
      return hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59
   }
   return false
}

export function dEvenValidation(dEven: number): boolean {
   const dEvenStr = dEven.toString()
   const year = parseInt(dEvenStr.slice(0, 4))
   const month = parseInt(dEvenStr.slice(4, 6))
   const day = parseInt(dEvenStr.slice(6))
   return year >= 1300 && year <= 1500 && month >= 1 && month <= 12 && day >= 1 && day <= 31
}
