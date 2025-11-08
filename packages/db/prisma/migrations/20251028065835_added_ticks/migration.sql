-- AddForeignKey
ALTER TABLE "WebsiteTick" ADD CONSTRAINT "WebsiteTick_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "Website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DnsTick" ADD CONSTRAINT "DnsTick_dns_id_fkey" FOREIGN KEY ("dns_id") REFERENCES "Dns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
