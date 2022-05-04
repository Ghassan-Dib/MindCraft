-- CreateTable
CREATE TABLE "ContactUs" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactUs_email_key" ON "ContactUs"("email");
