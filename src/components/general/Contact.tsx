import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { SendHorizontal } from "lucide-react";

export default function Contact() {
  return (
    <section className="">
      <h1 className="text-3xl font-semibold text-center  border-b-2 border-secondary pb-2 mb-5">
        CONTACT
      </h1>
      <form className="grid md:grid-cols-2 max-w-2xl mx-auto mt-10  gap-x-10 gap-y-7">
        <div className="gap-y-7 flex flex-col">
          <Input placeholder="Enter your name" className="italic" />
          <Input
            placeholder="Enter your email address"
            className="italic"
            type="email"
          />
          <Input placeholder="Enter your subject" className="italic" />
        </div>
        <div>
          <Textarea rows={8} placeholder="Enter your message..." />
        </div>
      </form>
      i. Arama sayfasına yazdığınız kelimeyi, anlamına karşılık gelen
      kavramları, dilini ve bu kelimeyi aratan insanların ortak amacına göre bir
      algoritma çizer. ii. Sorguladığınız kavram ile eşleşen web sayfalarını
      arar. iii. Bulunduğunuz konumu, geçmiş aramalarınızı, arama için
      yaptığınız ayarları, geçmişte sık sık kullandığınız web sitelerini de
      dikkate alarak karşınıza bir sonuç sayfası çıkarır. iv. Web sayfalarındaki
      bilgilerin bir araya geliş şeklini değerlendirir. Yukarıda verilen
      maddelere göre Google arama hangi sırada çalışır?
      <p className="text-xs mt-5 italic text-gray-300 text-center">
        Fill in the contact form above and I will get back to you ASAP!
      </p>
      <Button className="text-lg flex mx-auto mt-5 w-32" size="sm">
        <SendHorizontal />
      </Button>
      <p id="id">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
          cumque!
        </span>
        <span>
          Doloribus similique, ipsum quos sapiente ab ducimus! Harum, quisquam
          sint.
        </span>
        <span>
          Corrupti optio neque atque minus sed culpa tempora adipisci vero!
        </span>
        <span>
          Nesciunt animi voluptates hic quidem quae officia obcaecati molestias
          sunt.
        </span>
        <span>
          Eaque vitae, tempora culpa ex impedit ipsa dicta minima accusamus?
        </span>
        <span>
          Soluta perspiciatis laboriosam possimus dolor laborum facilis
          voluptatibus nisi perferendis?
        </span>
      </p>
    </section>
  );
}
