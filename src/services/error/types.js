'use strict';

class InternalError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InternalError';
        this.statusCode = 500;
        this.errId = 1001;
    }
}

class JsonWebTokenError extends Error {
    constructor(message) {
        super(message);
        this.name = 'JsonWebTokenError';
        this.statusCode = 401;
        this.errId = 1002;
    }
}

class InvalidCredentialError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidCredentialError';
        this.statusCode = 400;
        this.errId = 1003;
    }
}

class ResourceNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ResourceNotFoundError';
        this.statusCode = 404;
        this.errId = 1004;
    }
}

class ForbiddenAccessError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ForbiddenAccessError';
        this.statusCode = 403;
        this.errId = 1005;
    }
}

class UnauthorizedAccessError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnauthorizedAccessError';
        this.statusCode = 401;
        this.errId = 1006;
    }
}

module.exports = {
    InvalidCredentialError,
    InternalError,
    JsonWebTokenError,
    ResourceNotFoundError,
    ForbiddenAccessError,
    UnauthorizedAccessError,
};
