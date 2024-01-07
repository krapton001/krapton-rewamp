// Importing necessary modules and constants
import connectDatabase from '../libs/databaseConn';
import contact from '../models/contact';
import { NextResponse } from 'next/server';
import HTTP_STATUS_CODES from '../constants/codes';

/**
 * Handles the creation of a new contact entry.
 * @param {*} req - The request object containing contact details.
 * @returns NextResponse - Returns a Next.js response object.
 */
export async function POST(req) {
    try {
        // Extract contact details from the request body
        const { name, phNum, msg, location, email, purpose } = await req.json();
        let reqObj = { name, phNum, msg, location, email, purpose };

        // Connect to the database
        await connectDatabase();

        // Create a new contact entry
        const createdData = await contact.create(reqObj);

        // Return success response with the created contact data
        return NextResponse.json({
            status: HTTP_STATUS_CODES.CREATED,
            msg: 'Contact added',
            data: createdData,
        });
    } catch (error) {
        // Handle errors and return a corresponding error response
        return NextResponse.json({
            status: HTTP_STATUS_CODES.BAD_REQUEST,
            msg: 'Bad request',
            error: error.toString(),
        });
    }
}

/**
 * Handles the GET request to fetch paginated contacts.
 * @param {*} req - The request object containing pagination parameters.
 * @returns NextResponse - Returns a Next.js response object.
 */
export async function GET(req) {
    try {
        // Extract pagination parameters from the request URL
        const page = parseInt(req.nextUrl.searchParams.get('page')) || 1;
        const limit = parseInt(req.nextUrl.searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;

        // Establish connection to the database
        await connectDatabase();

        // Retrieve contacts based on pagination settings
        const allContacts = await contact.find({}).skip(skip).limit(limit);

        // Prepare the response object with contacts data and pagination details
        return NextResponse.json({
            status: allContacts.length ? HTTP_STATUS_CODES.OK : HTTP_STATUS_CODES.NO_CONTENT,
            message: allContacts.length ? `${allContacts.length} Contacts retrieved ` : 'No contacts found',
            data: allContacts,
            pagination: {
                currentPage: page,
                limit,
            },
        });
    } catch (error) {
        // Handle errors and construct an appropriate error response
        return NextResponse.json({
            status: HTTP_STATUS_CODES.BAD_REQUEST,
            message: 'Something went wrong',
            error: error.toString(),
        });
    }
}

/**
 * Handles the DELETE request to delete a contact.
 * @param {*} req - The request object containing the contact ID to delete.
 * @returns NextResponse - Returns a Next.js response object.
 */
export async function DELETE(req) {
    try {
        // Extract the contact ID from the request query parameters
        const id = req.nextUrl.searchParams.get('id');

        // Connect to the database
        await connectDatabase();

        // Find and delete the contact based on the provided ID
        const contactDeleted = await contact.findByIdAndDelete(id);

        // Check if the contact was successfully deleted
        if (!contactDeleted) {
            // If contact not found, return a 404 response
            return new NextResponse({
                status: HTTP_STATUS_CODES.NOT_FOUND,
                msg: 'Contact not found',
            });
        }

        // Return a success response after contact deletion
        return new NextResponse({
            status: HTTP_STATUS_CODES.OK,
            msg: 'Contact deleted',
        });
    } catch (error) {
        // Handle errors and return an error response
        return new NextResponse({
            status: HTTP_STATUS_CODES.BAD_REQUEST,
            msg: 'Something went wrong',
            error: error.toString(),
        });
    }
}
