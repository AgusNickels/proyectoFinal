import z from 'zod';

const typePerro = z.object({
    id: z.number().max(100).positive({
        message: "La ID debe ser positiva"
    }),
    raza: z.string({
        message: "Se espera un string"
    }),
    medida: z.string({
        message: "Se espera un string"
    }),
    origen: z.string({
        message: "Se espera un string"
    }),
    descripcion: z.string({
        message: "Se espera un string"
    })
});

export function validatePerro(data){
    return typePerro.safeParse(data);
}