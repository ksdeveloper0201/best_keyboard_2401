"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const formSchema = z.object({
    productName: z.string(),
    productPrice: z.string(),
    description: z.string(),
    maker: z.string(),
    category: z.array(z.string()),
    key_count: z.string(),
    key_type: z.string(),
    separable: z.array(z.string()),
    programable: z.array(z.string()),
    connecting: z.array(z.string()),

})


function ProductRegistration() {

    const categorySelect = ["キーボード", "キースイッチ", "その他"]
    const separableSelect = ["一体型", "分割式"]
    const programableSelect = ["プログラム可能", "プログラム不可"]
    const connectingSelect = ["有線", "無線"]

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            productName: "",
            productPrice: "",
            description: "",
            maker: "",
            category: [],
            key_count: "",
            key_type: "",
            separable: [],
            programable: [],
            connecting: [],
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className="flex justify-center mt-8">
            <Form {...form}>
                <div className="w-full md:max-w-2xl">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-8 md:w-full">
                        <FormField
                            control={form.control}
                            name="productName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>製品名</FormLabel>
                                    <FormControl>
                                        <Input placeholder="keyboard name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="productPrice"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>金額</FormLabel>
                                    <FormControl>
                                        <Input placeholder="price" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="maker"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>メーカー</FormLabel>
                                    <FormControl>
                                        <Input placeholder="maker" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>商品説明</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself"
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>カテゴリー</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={""}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categorySelect.map((category, index) => (
                                                <SelectItem key={index} value={category}>{category}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="key_count"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>キー数</FormLabel>
                                    <FormControl>
                                        <Input placeholder="key_count" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="key_type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>キーの種類</FormLabel>
                                    <FormControl>
                                        <Input placeholder="key_type" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="separable"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>一体型・分割</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={""}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {separableSelect.map((option, index) => (
                                                <SelectItem key={index} value={option}>{option}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="programable"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>programable</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={""}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {programableSelect.map((data, index) => (
                                                <SelectItem key={index} value={data}>{data}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="connecting"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>connecting</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={""}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {connectingSelect.map((data, index) => (
                                                <SelectItem key={index} value={data}>{data}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </Form>
        </div>
    )


}

export default ProductRegistration;