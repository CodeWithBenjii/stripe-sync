const Prisma = require('@prisma/client');
const { logger } = require('../../utils/logger');

const prisma = new Prisma.PrismaClient();

const invoiceCreated = async (invoice) => {
  const data = invoice.data.object;
  try {
    await prisma.invoices.create({
      data: {
        id: data.id,
        object: data.object,
        auto_advance: data.auto_advance,
        collection_method: data.collection_method,
        currency: data.currency,
        description: data.description,
        hosted_invoice_url: data.hosted_invoice_url,
        lines: data.lines,
        metadata: data.metadata,
        period_end: data.period_end,
        period_start: data.period_start,
        status: data.status,
        total: data.total,
        account_country: data.account_country,
        account_name: data.account_name,
        account_tax_ids: data.account_tax_ids || undefined,
        amount_due: data.amount_due,
        amount_paid: data.amount_paid,
        amount_remaining: data.amount_remaining,
        application_fee_amount: data.application_fee_amount,
        attempt_count: data.attempt_count,
        attempted: data.attempted,
        billing_reason: data.billing_reason,
        created: data.created,
        custom_fields: data.custom_fields || undefined,
        customer_address: data.customer_address || undefined,
        customer_email: data.customer_email,
        customer_name: data.customer_name,
        customer_phone: data.customer_phone,
        customer_shipping: data.customer_shipping || undefined,
        customer_tax_exempt: data.customer_tax_exempt,
        customer_tax_ids: data.customer_tax_ids,
        default_tax_rates: data.default_tax_rates,
        discount: data.discount || undefined,
        discounts: data.discounts,
        due_date: data.due_date,
        ending_balance: data.ending_balance,
        footer: data.footer,
        invoice_pdf: data.invoice_pdf,
        last_finalization_error: data.last_finalization_error || undefined,
        livemode: data.livemode,
        next_payment_attempt: data.next_payment_attempt,
        number: data.number,
        paid: data.paid,
        payment_settings: data.payment_settings,
        post_payment_credit_notes_amount: data.post_payment_credit_notes_amount,
        pre_payment_credit_notes_amount: data.pre_payment_credit_notes_amount,
        receipt_number: data.receipt_number,
        starting_balance: data.starting_balance,
        statement_descriptor: data.statement_descriptor,
        status_transitions: data.status_transitions,
        subtotal: data.subtotal,
        tax: data.tax,
        total_discount_amounts: data.total_discount_amounts,
        total_tax_amounts: data.total_tax_amounts,
        transfer_data: data.transfer_data || undefined,
        webhooks_delivered_at: data.webhooks_delivered_at,
        customer: data.customer,
        subscription: data.subscription,
        payment_intent: data.payment_intent,
        default_payment_method: data.default_payment_method,
        default_source: data.default_source,
        on_behalf_of: data.on_behalf_of,
        charge: data.charge,
      },
    });
    logger.log('Created Invoice');
    return { message: 'Success', code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};
const updateInviceProcess = async (invoice) => {
  try {
    const data = invoice.data.object;
    await prisma.invoices.update({
      where: {
        id: data.id,
      },
      data: {
        id: data.id,
        object: data.object,
        auto_advance: data.auto_advance,
        collection_method: data.collection_method,
        currency: data.currency,
        description: data.description,
        hosted_invoice_url: data.hosted_invoice_url,
        lines: data.lines,
        metadata: data.metadata,
        period_end: data.period_end,
        period_start: data.period_start,
        status: data.status,
        total: data.total,
        account_country: data.account_country,
        account_name: data.account_name,
        account_tax_ids: data.account_tax_ids || undefined,
        amount_due: data.amount_due,
        amount_paid: data.amount_paid,
        amount_remaining: data.amount_remaining,
        application_fee_amount: data.application_fee_amount,
        attempt_count: data.attempt_count,
        attempted: data.attempted,
        billing_reason: data.billing_reason,
        created: data.created,
        custom_fields: data.custom_fields || undefined,
        customer_address: data.customer_address || undefined,
        customer_email: data.customer_email,
        customer_name: data.customer_name,
        customer_phone: data.customer_phone,
        customer_shipping: data.customer_shipping || undefined,
        customer_tax_exempt: data.customer_tax_exempt,
        customer_tax_ids: data.customer_tax_ids,
        default_tax_rates: data.default_tax_rates,
        discount: data.discount || undefined,
        discounts: data.discounts,
        due_date: data.due_date,
        ending_balance: data.ending_balance,
        footer: data.footer,
        invoice_pdf: data.invoice_pdf,
        last_finalization_error: data.last_finalization_error || undefined,
        livemode: data.livemode,
        next_payment_attempt: data.next_payment_attempt,
        number: data.number,
        paid: data.paid,
        payment_settings: data.payment_settings,
        post_payment_credit_notes_amount: data.post_payment_credit_notes_amount,
        pre_payment_credit_notes_amount: data.pre_payment_credit_notes_amount,
        receipt_number: data.receipt_number,
        starting_balance: data.starting_balance,
        statement_descriptor: data.statement_descriptor,
        status_transitions: data.status_transitions,
        subtotal: data.subtotal,
        tax: data.tax,
        total_discount_amounts: data.total_discount_amounts,
        total_tax_amounts: data.total_tax_amounts,
        transfer_data: data.transfer_data || undefined,
        webhooks_delivered_at: data.webhooks_delivered_at,
        customer: data.customer,
        subscription: data.subscription,
        payment_intent: data.payment_intent,
        default_payment_method: data.default_payment_method,
        default_source: data.default_source,
        on_behalf_of: data.on_behalf_of,
        charge: data.charge,
      },
    });
    logger.log(`Created ${invoice.type}`);

    return { message: invoice.type, code: 200 };
  } catch (error) {
    return { message: error, code: 300 };
  }
};

const invoiceController = async (invoice) => {
  switch (invoice.type) {
    case 'invoice.created': {
      return invoiceCreated(invoice);
    }
    case 'invoice.deleted': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.finalization_failed': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.finalized': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.marked_uncollectible': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.paid': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.payment_action_required': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.payment_failed': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.payment_succeeded': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.sent': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.upcoming': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.updated': {
      return updateInviceProcess(invoice);
    }
    case 'invoice.voided': {
      return updateInviceProcess(invoice);
    }

    default:
      logger.log(`Unknown Customer Event type : ${invoice.type}`);
      return undefined;
  }
};

module.exports = {
  invoiceController,
};
