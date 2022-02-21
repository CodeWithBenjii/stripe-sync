-- CreateEnum
CREATE TYPE "invoice_status" AS ENUM ('draft', 'open', 'paid', 'uncollectible', 'void');

-- CreateEnum
CREATE TYPE "pricing_tiers" AS ENUM ('graduated', 'volume');

-- CreateEnum
CREATE TYPE "pricing_type" AS ENUM ('one_time', 'recurring');

-- CreateEnum
CREATE TYPE "subscription_status" AS ENUM ('trialing', 'active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'unpaid');

-- CreateTable
CREATE TABLE "charges" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "card" JSONB,
    "paid" BOOLEAN,
    "order" TEXT,
    "amount" BIGINT,
    "review" TEXT,
    "source" JSONB,
    "status" TEXT,
    "created" INTEGER,
    "dispute" TEXT,
    "invoice" TEXT,
    "outcome" JSONB,
    "refunds" JSONB,
    "updated" INTEGER,
    "captured" BOOLEAN,
    "currency" TEXT,
    "customer" TEXT,
    "livemode" BOOLEAN,
    "metadata" JSONB,
    "refunded" BOOLEAN,
    "shipping" JSONB,
    "application" TEXT,
    "description" TEXT,
    "destination" TEXT,
    "failure_code" TEXT,
    "on_behalf_of" TEXT,
    "fraud_details" JSONB,
    "receipt_email" TEXT,
    "payment_intent" TEXT,
    "receipt_number" TEXT,
    "transfer_group" TEXT,
    "amount_refunded" BIGINT,
    "application_fee" TEXT,
    "failure_message" TEXT,
    "source_transfer" TEXT,
    "balance_transaction" TEXT,
    "statement_descriptor" TEXT,
    "statement_description" TEXT,
    "payment_method_details" JSONB,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "charges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupons" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "name" TEXT,
    "valid" BOOLEAN,
    "created" INTEGER,
    "updated" INTEGER,
    "currency" TEXT,
    "duration" TEXT,
    "livemode" BOOLEAN,
    "metadata" JSONB,
    "redeem_by" INTEGER,
    "amount_off" BIGINT,
    "percent_off" DOUBLE PRECISION,
    "times_redeemed" BIGINT,
    "max_redemptions" BIGINT,
    "duration_in_months" BIGINT,
    "percent_off_precise" DOUBLE PRECISION,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "coupons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "address" JSONB,
    "description" TEXT,
    "email" TEXT,
    "metadata" JSONB,
    "name" TEXT,
    "phone" TEXT,
    "shipping" JSONB,
    "balance" INTEGER,
    "created" INTEGER,
    "currency" TEXT,
    "default_source" TEXT,
    "delinquent" BOOLEAN,
    "discount" JSONB,
    "invoice_prefix" TEXT,
    "invoice_settings" JSONB,
    "livemode" BOOLEAN,
    "next_invoice_sequence" INTEGER,
    "preferred_locales" JSONB,
    "tax_exempt" TEXT,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disputes" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "amount" BIGINT,
    "charge" TEXT,
    "reason" TEXT,
    "status" TEXT,
    "created" INTEGER,
    "updated" INTEGER,
    "currency" TEXT,
    "evidence" JSONB,
    "livemode" BOOLEAN,
    "metadata" JSONB,
    "evidence_details" JSONB,
    "balance_transactions" JSONB,
    "is_charge_refundable" BOOLEAN,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "disputes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "data" JSONB,
    "type" TEXT,
    "created" INTEGER,
    "request" TEXT,
    "updated" INTEGER,
    "livemode" BOOLEAN,
    "api_version" TEXT,
    "pending_webhooks" BIGINT,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "auto_advance" BOOLEAN,
    "collection_method" TEXT,
    "currency" TEXT,
    "description" TEXT,
    "hosted_invoice_url" TEXT,
    "lines" JSONB,
    "metadata" JSONB,
    "period_end" INTEGER,
    "period_start" INTEGER,
    "status" "invoice_status",
    "total" BIGINT,
    "account_country" TEXT,
    "account_name" TEXT,
    "account_tax_ids" JSONB,
    "amount_due" BIGINT,
    "amount_paid" BIGINT,
    "amount_remaining" BIGINT,
    "application_fee_amount" BIGINT,
    "attempt_count" INTEGER,
    "attempted" BOOLEAN,
    "billing_reason" TEXT,
    "created" INTEGER,
    "custom_fields" JSONB,
    "customer_address" JSONB,
    "customer_email" TEXT,
    "customer_name" TEXT,
    "customer_phone" TEXT,
    "customer_shipping" JSONB,
    "customer_tax_exempt" TEXT,
    "customer_tax_ids" JSONB,
    "default_tax_rates" JSONB,
    "discount" JSONB,
    "discounts" JSONB,
    "due_date" INTEGER,
    "ending_balance" INTEGER,
    "footer" TEXT,
    "invoice_pdf" TEXT,
    "last_finalization_error" JSONB,
    "livemode" BOOLEAN,
    "next_payment_attempt" INTEGER,
    "number" TEXT,
    "paid" BOOLEAN,
    "payment_settings" JSONB,
    "post_payment_credit_notes_amount" INTEGER,
    "pre_payment_credit_notes_amount" INTEGER,
    "receipt_number" TEXT,
    "starting_balance" INTEGER,
    "statement_descriptor" TEXT,
    "status_transitions" JSONB,
    "subtotal" INTEGER,
    "tax" INTEGER,
    "total_discount_amounts" JSONB,
    "total_tax_amounts" JSONB,
    "transfer_data" JSONB,
    "webhooks_delivered_at" INTEGER,
    "customer" TEXT,
    "subscription" TEXT,
    "payment_intent" TEXT,
    "default_payment_method" TEXT,
    "default_source" TEXT,
    "on_behalf_of" TEXT,
    "charge" TEXT,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "migrations" (
    "id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "hash" VARCHAR(40) NOT NULL,
    "executed_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "migrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payouts" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "date" TEXT,
    "type" TEXT,
    "amount" BIGINT,
    "method" TEXT,
    "status" TEXT,
    "created" INTEGER,
    "updated" INTEGER,
    "currency" TEXT,
    "livemode" BOOLEAN,
    "metadata" JSONB,
    "automatic" BOOLEAN,
    "recipient" TEXT,
    "description" TEXT,
    "destination" TEXT,
    "source_type" TEXT,
    "arrival_date" TEXT,
    "bank_account" JSONB,
    "failure_code" TEXT,
    "transfer_group" TEXT,
    "amount_reversed" BIGINT,
    "failure_message" TEXT,
    "source_transaction" TEXT,
    "balance_transaction" TEXT,
    "statement_descriptor" TEXT,
    "statement_description" TEXT,
    "failure_balance_transaction" TEXT,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "payouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plans" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "name" TEXT,
    "tiers" JSONB,
    "active" BOOLEAN,
    "amount" BIGINT,
    "created" INTEGER,
    "product" TEXT,
    "updated" INTEGER,
    "currency" TEXT,
    "interval" TEXT,
    "livemode" BOOLEAN,
    "metadata" JSONB,
    "nickname" TEXT,
    "tiers_mode" TEXT,
    "usage_type" TEXT,
    "billing_scheme" TEXT,
    "interval_count" BIGINT,
    "aggregate_usage" TEXT,
    "transform_usage" TEXT,
    "trial_period_days" BIGINT,
    "statement_descriptor" TEXT,
    "statement_description" TEXT,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prices" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "active" BOOLEAN,
    "currency" TEXT,
    "metadata" JSONB,
    "nickname" TEXT,
    "recurring" JSONB,
    "type" "pricing_type",
    "unit_amount" INTEGER,
    "billing_scheme" TEXT,
    "created" INTEGER,
    "livemode" BOOLEAN,
    "lookup_key" TEXT,
    "tiers_mode" "pricing_tiers",
    "transform_quantity" JSONB,
    "unit_amount_decimal" TEXT,
    "product" TEXT,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "active" BOOLEAN,
    "description" TEXT,
    "metadata" JSONB,
    "name" TEXT,
    "created" INTEGER,
    "images" JSONB,
    "livemode" BOOLEAN,
    "package_dimensions" JSONB,
    "shippable" BOOLEAN,
    "statement_descriptor" TEXT,
    "unit_label" TEXT,
    "updated" INTEGER,
    "url" TEXT,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_items" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "billing_thresholds" JSONB,
    "created" INTEGER,
    "deleted" BOOLEAN,
    "metadata" JSONB,
    "quantity" INTEGER,
    "price" TEXT,
    "subscription" TEXT,
    "tax_rates" JSONB,

    CONSTRAINT "subscription_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" TEXT NOT NULL,
    "object" TEXT,
    "cancel_at_period_end" BOOLEAN,
    "current_period_end" INTEGER,
    "current_period_start" INTEGER,
    "default_payment_method" TEXT,
    "items" JSONB,
    "metadata" JSONB,
    "pending_setup_intent" TEXT,
    "pending_update" JSONB,
    "status" "subscription_status",
    "application_fee_percent" DOUBLE PRECISION,
    "billing_cycle_anchor" INTEGER,
    "billing_thresholds" JSONB,
    "cancel_at" INTEGER,
    "canceled_at" INTEGER,
    "collection_method" TEXT,
    "created" INTEGER,
    "days_until_due" INTEGER,
    "default_source" TEXT,
    "default_tax_rates" JSONB,
    "discount" JSONB,
    "ended_at" INTEGER,
    "livemode" BOOLEAN,
    "next_pending_invoice_item_invoice" INTEGER,
    "pause_collection" JSONB,
    "pending_invoice_item_interval" JSONB,
    "start_date" INTEGER,
    "transfer_data" JSONB,
    "trial_end" JSONB,
    "trial_start" JSONB,
    "schedule" TEXT,
    "customer" TEXT,
    "latest_invoice" TEXT,
    "plan" TEXT,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "migrations_name_key" ON "migrations"("name");

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_customer_fkey" FOREIGN KEY ("customer") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_subscription_fkey" FOREIGN KEY ("subscription") REFERENCES "subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prices" ADD CONSTRAINT "prices_product_fkey" FOREIGN KEY ("product") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_items" ADD CONSTRAINT "subscription_items_price_fkey" FOREIGN KEY ("price") REFERENCES "prices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_items" ADD CONSTRAINT "subscription_items_subscription_fkey" FOREIGN KEY ("subscription") REFERENCES "subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_customer_fkey" FOREIGN KEY ("customer") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
