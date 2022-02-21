-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_customer_fkey";

-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_subscription_fkey";

-- DropForeignKey
ALTER TABLE "prices" DROP CONSTRAINT "prices_product_fkey";

-- DropForeignKey
ALTER TABLE "subscription_items" DROP CONSTRAINT "subscription_items_price_fkey";

-- DropForeignKey
ALTER TABLE "subscription_items" DROP CONSTRAINT "subscription_items_subscription_fkey";

-- DropForeignKey
ALTER TABLE "subscriptions" DROP CONSTRAINT "subscriptions_customer_fkey";

-- CreateIndex
CREATE INDEX "stripe_invoices_customer_idx" ON "invoices"("customer");

-- CreateIndex
CREATE INDEX "stripe_invoices_subscription_idx" ON "invoices"("subscription");

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_customer_fkey" FOREIGN KEY ("customer") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_subscription_fkey" FOREIGN KEY ("subscription") REFERENCES "subscriptions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "prices" ADD CONSTRAINT "prices_product_fkey" FOREIGN KEY ("product") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_items" ADD CONSTRAINT "subscription_items_price_fkey" FOREIGN KEY ("price") REFERENCES "prices"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription_items" ADD CONSTRAINT "subscription_items_subscription_fkey" FOREIGN KEY ("subscription") REFERENCES "subscriptions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_customer_fkey" FOREIGN KEY ("customer") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
