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
