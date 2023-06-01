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

export function omitNulls<T extends Record<string, any> = any>(obj: T): OmitNulls<T> {
   const ret = obj

   for (const [ key, value ] of Object.entries(obj)) {
      if (value === null) {
         delete ret[key]
      }
   }

   return ret
}

type OmitNulls<T extends Record<string, any>> = {
   [K in keyof T]: T[K] extends null ? never : T[K]
}
