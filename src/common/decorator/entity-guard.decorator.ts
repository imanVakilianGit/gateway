import { Reflector } from '@nestjs/core';

export const EntityGuard = Reflector.createDecorator<{
    employee?: { shouldExist: true; isActive?: boolean };
    manager?: { shouldExist: true; isActive?: boolean };
}>();
